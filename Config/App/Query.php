<?php
    class Query extends Conexion{
        private $pdo, $con, $sql, $datos;
        public function __construct(){
            $this->pdo = new Conexion();
            $this->con = $this->pdo->conexion();
        }

        public function select(string $sql){
            $this->sql = $sql;
            $resultado = $this->con->prepare($this->sql);
            $resultado->execute();
            $data = $resultado->fetch(PDO::FETCH_ASSOC);
            
            return $data;
        }

        public function selectAll(string $sql){
            $this->sql = $sql;
            $resultado = $this->con->prepare($this->sql);
            $resultado->execute();
            $data = $resultado->fetchAll(PDO::FETCH_ASSOC);
            
            return $data;
        }

        public function save(string $sql, array $datos){
            $this->sql = $sql;
            $this->datos = $datos;
            $insertar = $this->con->prepare($this->sql);
            $data = $insertar->execute($this->datos);

            if($data){
                $resultado = 1;
            }else{
                $resultado = 0;
            }
            return $resultado;
        }
    }
?>