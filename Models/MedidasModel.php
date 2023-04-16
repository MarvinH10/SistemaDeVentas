<?php
    class MedidasModel extends Query{
        private $nombre, $nombre_corto, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getMedidas(){
            $sql = "SELECT * FROM medidas";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarMedida(string $nombre, string $nombre_corto){
            $this->nombre = $nombre;
            $this->nombre_corto = $nombre_corto;
            $verificar = "SELECT * FROM medidas WHERE nombre = '$this->nombre' AND nombre_corto = '$this->nombre_corto'";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO medidas(nombre, nombre_corto) VALUES (?, ?)";
                $datos = array($this->nombre, $this->nombre_corto);
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
        }//

        public function modificarMedida(string $nombre, string $nombre_corto, int $id){
            $this->nombre = $nombre;
            $this->nombre_corto = $nombre_corto;
            $this->id = $id;
            $sql = "UPDATE medidas SET nombre = ?, nombre_corto = ? WHERE id = ?";
            $datos = array($this->nombre, $this->nombre_corto, $this->id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Modificado";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function editarMedid(int $id){
            $sql = "SELECT * FROM medidas WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function accionMedid(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE medidas SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }
    }
?>