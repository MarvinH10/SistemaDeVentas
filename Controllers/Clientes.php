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
                $msg = array('msg' => 'Todos los campos son obligatorios!', 'icono' => 'warning');
            }else{  
                if($id == ""){
                        $data = $this->model->registrarCliente($dni, $nombre, $telefono, $direccion);
                    
                        if($data == "Ok"){
                            $msg = array('msg' => 'Se registro correctamente al cliente!', 'icono' => 'success');
                        }else if($data == "Existe"){
                            $msg = array('msg' => 'El dni ya existe!', 'icono' => 'warning');
                        }else{
                            $msg = array('msg' => 'Error al registrar al cliente!', 'icono' => 'error');
                        }
                }else{
                    $data = $this->model->modificarCliente($dni, $nombre, $telefono, $direccion, $id);
                    
                    if($data == "Modificado"){
                        $msg = array('msg' => 'Se modifico correctamente al cliente!', 'icono' => 'success');
                    }else{
                        $msg = array('msg' => 'Error al modificar al cliente!', 'icono' => 'error');
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
                $msg = array('msg' => 'Se elimino correctamente al cliente!', 'icono' => 'success');
            }else{
                $msg = array('msg' => 'Error al eliminar el cliente!', 'icono' => 'error');
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