<?php
    class Conexion{
        private $conexion;
        public function __construct(){
            $pdo = "mysql:host=".host."; dbname=".db.";.charset.";

            try{
                $this->conexion = new PDO($pdo, user, password);
                $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e){
                echo "Error en la conexión".$e->getMessage();
            }
        }
        public function conexion(){
            return $this->conexion;
        }
    }
?>