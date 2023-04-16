<?php
    class Clientes extends Controller{
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header("location: ".base_url);
            }
            parent::__construct();
        }

        public function index(){
            $this->views->getView($this, "index");
        }

        public function listar(){
            $data = $this->model->getClientes();
            for($i=0; $i < count($data); $i++){ 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarClient('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarClient('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarClient('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $dni = $_POST['dni'];
            $nombre = $_POST['nombre'];
            $telefono = $_POST['telefono'];
            $direccion = $_POST['direccion'];
            $id = $_POST['id'];

            if(empty($dni) || empty($nombre) || empty($telefono) || empty($direccion)){
                $msg = "Todos los campos son obligatorios!";
            }else{  
                if($id == ""){
                        $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                    
                        if($data == "Ok"){
                            $msg = "Si";
                        }else if($data == "Existe"){
                            $msg = "El dni ya existe!";
                        }else{
                            $msg = "Error al registrar el cliente!";
                        }
                }else{
                    $data = $this->model->modificarCliente($dni, $nombre, $telefono, $direccion, $id);
                    
                    if($data == "Modificado"){
                        $msg = "Modificado";
                    }else{
                        $msg = "Error al modificar el cliente!";
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarClient($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionClient(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar el cliente!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionClient(1, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al reactivar el cliente!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>