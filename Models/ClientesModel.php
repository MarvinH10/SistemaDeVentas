<?php
    class ClientesModel extends Query{
        private $dni, $nombre, $telefono, $direccion, $id, $estado;

        public function __construct(){
            parent::__construct();
        }

        public function getClientes(){
            $sql = "SELECT * FROM clientes";
            $data = $this->selectAll($sql);

            return $data;
        }

        public function registrarCliente(string $dni, string $nombre, string $telefono, string $direccion){
            $this->dni = $dni;
            $this->nombre = $nombre;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $verificar = "SELECT * FROM clientes WHERE dni = '$this->dni'";
            $existe = $this->select($verificar);

            if(empty($existe)){
                $sql = "INSERT INTO clientes(dni, nombre, telefono, direccion) VALUES (?, ?, ?, ?)";
                $datos = array($this->dni, $this->nombre, $this->telefono, $this->direccion);
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

        public function modificarCliente(string $dni, string $nombre, string $telefono, string $direccion, int $id){
            $this->dni = $dni;
            $this->nombre = $nombre;
            $this->telefono = $telefono;
            $this->direccion = $direccion;
            $this->id = $id;
            $sql = "UPDATE clientes SET dni = ?, nombre = ?, telefono = ?, direccion = ? WHERE id = ?";
            $datos = array($this->dni, $this->nombre, $this->telefono, $this->direccion, $this->id);
            $data = $this->save($sql, $datos);

            if($data == 1){
                $resultado = "Modificado";
            }else{
                $resultado = "Error";
            }
            return $resultado;
        }

        public function editarClient(int $id){
            $sql = "SELECT * FROM clientes WHERE id = $id";
            $data = $this->select($sql);
            return $data;
        }

        public function accionClient(int $estado, int $id){
            $this->id = $id;
            $this->estado = $estado;
            $sql = "UPDATE clientes SET estado = ? WHERE id = ?";
            $datos = array($this->estado, $this->id);
            $data = $this->save($sql, $datos);
            return $data;
        }
    }
?>