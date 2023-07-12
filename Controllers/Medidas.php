<?php
    class Medidas extends Controller{
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header("location: ".base_url);
            }
            parent::__construct();
        }

        public function index(){
            $id_user = $_SESSION['id_usuario'];
            $verificar = $this->model->verificarPermiso($id_user, 'medidas');
            if(!empty($verificar) || $id_user == 1){
                $this->views->getView($this, "index");
            }else{
                header('Location: '.base_url.'Errors/permisos');
            }
        }

        public function listar(){
            $data = $this->model->getMedidas();
            for($i=0; $i < count($data); $i++){ 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarMedid('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarMedid('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarMedid('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $nombre = $_POST['nombre'];
            $nombre_corto = $_POST['nombre_corto'];
            $id = $_POST['id'];

            if(empty($nombre) || empty($nombre_corto)){
                $msg = "Todos los campos son obligatorios!";
            }else{  
                if($id == ""){
                        $data = $this->model->registrarMedida($nombre, $nombre_corto);
                    
                        if($data == "Ok"){
                            $msg = "Si";
                        }else if($data == "Existe"){
                            $msg = "La medida ya existe!";
                        }else{
                            $msg = "Error al registrar la medida!";
                        }
                }else{
                    $data = $this->model->modificarMedida($nombre, $nombre_corto, $id);
                    
                    if($data == "Modificado"){
                        $msg = "Modificado";
                    }else{
                        $msg = "Error al modificar la medida!";
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarMedid($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionMedid(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar la medida!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionMedid(1, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al reactivar la medida!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>