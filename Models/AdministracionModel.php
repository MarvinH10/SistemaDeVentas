<?php
    class AdministracionModel extends Query{
        private $caja, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getEmpresa(){
            $sql = "SELECT * FROM configuracion";
            $data = $this->select($sql);

            return $data;
        }

        public function getDatos(string $table){
            $sql = "SELECT COUNT(*) AS total FROM $table";
            $data = $this->select($sql);

            return $data;
        }

        public function getVentas(){
            $sql = "SELECT COUNT(*) AS total FROM ventas WHERE fecha > CURDATE() AND estado = 1";
            $data = $this->select($sql);

            return $data;
        }

        public function getCompras(){
            $sql = "SELECT COUNT(*) AS total FROM compras WHERE fecha > CURDATE() AND estado = 1";
            $data = $this->select($sql);

            return $data;
        }

        public function modificar(string $nombre, string $fono, string $direccion, string $mensaje, int $id){
            $sql = "UPDATE configuracion SET nombre = ?, telefono = ?, direccion = ?, mensaje = ? WHERE id = ?";
            $datos = array($nombre, $fono, $direccion, $mensaje, $id);
            $data = $this->save($sql, $datos);
            if($data == 1){
                $resultado = "Ok";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function getStockMinimo(){
            $sql = "SELECT * FROM productos WHERE cantidad < 15 ORDER BY cantidad DESC LIMIT 10";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function getproductosVendidos(){
            $sql = "SELECT d.id_producto, d.cantidad, p.id, p.descripcion, SUM(d.cantidad) AS total FROM detalle_ventas d INNER JOIN productos p ON p.id = d.id_producto GROUP BY d.id_producto ORDER BY d.cantidad DESC LIMIT 10";
            $data = $this->selectAll($sql);

            return $data;
        }
    }
?>