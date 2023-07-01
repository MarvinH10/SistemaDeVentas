<?php
    class CajasModel extends Query{
        private $caja, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getCajas(string $table){
            $sql = "SELECT * FROM $table";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarArqueo(int $id_usuario, string $monto_inicial, string $fecha_apertura){
            $verificar = "SELECT * FROM cierre_caja WHERE id_usuario = '$id_usuario' AND estado = 1";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO cierre_caja(id_usuario, monto_inicial, fecha_apertura) VALUES (?, ?, ?)";
                $datos = array($id_usuario, $monto_inicial, $fecha_apertura);
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

        public function registrarCaja(string $caja){
            $this->caja = $caja;
            $verificar = "SELECT * FROM caja WHERE caja = '$this->caja'";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO caja(caja) VALUES (?)";
                $datos = array($this->caja);
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

        public function modificarCaja(string $caja, int $id){
            $this->caja = $caja;
            $this->id = $id;
            $sql = "UPDATE caja SET caja = ? WHERE id = ?";
            $datos = array($this->caja, $this->id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Modificado";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function editarBox(int $id){
            $sql = "SELECT * FROM caja WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function accionBox(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE caja SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }

        public function getVentas(int $id_user){
            $sql = "SELECT total, SUM(total) AS total FROM ventas WHERE id_usuario = '$id_user' AND estado = 1 AND apertura = 1";
            $data = $this->select($sql);
            return $data;
        }

        public function getTotalVentas(int $id_user){
            $sql = "SELECT COUNT(total) AS total FROM ventas WHERE id_usuario = '$id_user' AND estado = 1 AND apertura = 1";
            $data = $this->select($sql);
            return $data;
        }

        public function getMontoInicial(int $id_user){
            $sql = "SELECT id, monto_inicial FROM cierre_caja WHERE id_usuario = '$id_user' AND estado = 1";
            $data = $this->select($sql);
            return $data;
        }

        public function actualizarArqueo(string $mfinal, string $fcierre, string $tventas, string $general, int $id){
            $sql = "UPDATE cierre_caja SET monto_final = ?, fecha_cierre = ?, total_ventas = ?, monto_total = ?, estado = ?  WHERE id = ?";
            $datos = array($mfinal, $fcierre, $tventas, $general, 0, $id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Ok";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function actualizarApertura(int $id){
            $sql = "UPDATE ventas SET apertura = ? WHERE id_usuario = ?";
            $datos = array(0, $id);
            $this->save($sql, $datos);
        }

        public function verificarPermiso(int $id_user, string $nombre){
            $sql = "SELECT p.id, p.permiso, d.id, d.id_usuario, d.id_permiso FROM permisos p INNER JOIN detalle_permisos d ON p.id = d.id_permiso WHERE d.id_usuario = $id_user AND p.permiso = '$nombre'";
            $data = $this->selectAll($sql);
            return $data;
        }
    }
?>