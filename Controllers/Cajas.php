<?php
    class Cajas extends Controller{
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

        public function arqueo(){
            $this->views->getView($this, "arqueo");
        }

        public function listar(){
            $data = $this->model->getCajas();
            for($i=0; $i < count($data); $i++){ 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarBox('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarBox('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarBox('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $caja = $_POST['caja'];
            $id = $_POST['id'];

            if(empty($caja)){
                $msg = "Todos los campos son obligatorios!";
            }else{  
                if($id == ""){
                        $data = $this->model->registrarCaja($caja);
                    
                        if($data == "Ok"){
                            $msg = "Si";
                        }else if($data == "Existe"){
                            $msg = "La caja ya existe!";
                        }else{
                            $msg = "Error al registrar la caja!";
                        }
                }else{
                    $data = $this->model->modificarCaja($caja, $id);
                    
                    if($data == "Modificado"){
                        $msg = "Modificado";
                    }else{
                        $msg = "Error al modificar la caja!";
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function abrirArqueo(){
            $monto_inicial = $_POST['monto_inicial'];
            $fecha_apertura = date('Y-m-d');
            $id_usuario = $_SESSION['id_usuario'];

            if(empty($monto_inicial) || empty($fecha_apertura)){
                $msg = array('msg' => 'Todos los campos son obligatorios!', 'icono' => 'warning');
            }else{  
                $data = $this->model->registrarArqueo($id_usuario, $monto_inicial, $fecha_apertura);
                    
                if($data == "Ok"){
                    $msg = array('msg' => 'Caja abierta con éxito!', 'icono' => 'success');
                }else if($data == "Existe"){
                    $msg = array('msg' => 'La caja ya esta abierta!', 'icono' => 'warning');
                }else{
                    $msg = array('msg' => 'Error al abrir la caja!', 'icono' => 'error');
                }
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarBox($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionBox(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar la caja!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionBox(1, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al reactivar la categoria!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>