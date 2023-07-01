<?php
    class UsuariosModel extends Query{
        private $usuario, $nombre, $clave, $id_caja, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getUsuario(string $usuario, string $clave){
            $sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND clave = '$clave'";
            $data = $this->select($sql);

            return $data;
        }

        public function getCajas(){
            $sql = "SELECT * FROM caja WHERE estado = 1";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function getUsuarios(){
            $sql = "SELECT u.*, c.id as id_caja, c.caja FROM usuarios u INNER JOIN caja c WHERE u.id_caja = c.id";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarUsuario(string $usuario, string $nombre, string $clave, int $id_caja){
            $this->usuario = $usuario;
            $this->nombre = $nombre;
            $this->clave = $clave;
            $this->id_caja = $id_caja;
            $verificar = "SELECT * FROM usuarios WHERE usuario = '$this->usuario'";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO usuarios(usuario, nombre, clave, id_caja) VALUES (?, ?, ?, ?)";
                $datos = array($this->usuario, $this->nombre, $this->clave, $this->id_caja);
                $data = $this->save($sql, $datos);

                if($data == 1){
                    $resultado = "Ok";
                }else{
                    $resultado = "Error";
                }
            }else{
                $resultado = "Existe";
            }
            return $resultado;
        }

        public function modificarUsuario(string $usuario, string $nombre, int $id_caja, int $id){
            $this->usuario = $usuario;
            $this->nombre = $nombre;
            $this->id = $id;
            $this->id_caja = $id_caja;
            $sql = "UPDATE usuarios SET usuario = ?, nombre = ?, id_caja = ? WHERE id = ?";
            $datos = array($this->usuario, $this->nombre, $this->id_caja, $this->id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Modificado";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function editarUser(int $id){
            $sql = "SELECT * FROM usuarios WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function getPass(string $clave, int $id){
            $sql = "SELECT * FROM usuarios WHERE clave = '$clave' AND id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function accionUser(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE usuarios SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }

        public function modificarPass(string $clave, int $id){
            $sql = "UPDATE usuarios SET clave = ? WHERE id = ?";
            $datos = array($clave, $id);
            $data = $this->save($sql, $datos);
            return $data;
        }

        public function getPermisos(){
            $sql = "SELECT * FROM permisos";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarPermisos(int $id_user, int $id_permiso){
            $sql = "INSERT INTO detalle_permisos(id_usuario, id_permiso) VALUES (?, ?)";
            $datos = array($id_user, $id_permiso);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $resultado = 'Ok';
            }else{
                $resultado = 'Error';
            }
            return $resultado;
        }

        public function eliminarPermisos(int $id_user){
            $sql = "DELETE FROM detalle_permisos WHERE id_usuario = ?";
            $datos = array($id_user);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $resultado = 'Ok';
            }else{
                $resultado = 'Error';
            }
            return $resultado;
        }

        public function getDetallePermisos(int $id_user){
            $sql = "SELECT * FROM detalle_permisos  WHERE id_usuario = $id_user";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function verificarPermiso(int $id_user, string $nombre){
            $sql = "SELECT p.id, p.permiso, d.id, d.id_usuario, d.id_permiso FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.permiso = '$nombre'";
            $data = $this->selectAll($sql);
            return $data;
        }
    }
?>