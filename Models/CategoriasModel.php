<?php
    class CategoriasModel extends Query{
        private $nombre, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getCategorias(){
            $sql = "SELECT * FROM categorias";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarCategoria(string $nombre){
            $this->nombre = $nombre;
            $verificar = "SELECT * FROM categorias WHERE nombre = '$this->nombre'";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO categorias(nombre) VALUES (?)";
                $datos = array($this->nombre);
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

        public function modificarCategoria(string $nombre, int $id){
            $this->nombre = $nombre;
            $this->id = $id;
            $sql = "UPDATE categorias SET nombre = ? WHERE id = ?";
            $datos = array($this->nombre, $this->id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Modificado";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function editarCategory(int $id){
            $sql = "SELECT * FROM categorias WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function accionCategory(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE categorias SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }

        public function verificarPermiso(int $id_user, string $nombre){
            $sql = "SELECT p.id, p.permiso, d.id, d.id_usuario, d.id_permiso FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.permiso = '$nombre'";
            $data = $this->selectAll($sql);
            return $data;
        }
    }
?>