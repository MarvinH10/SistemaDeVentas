<?php
    class Categorias extends Controller{
        public function __construct(){
            session_start();
            if(empty($_SESSION['activo'])){
                header("location: ".base_url);
            }
            parent::__construct();
        }

        public function index(){
            $id_user = $_SESSION['id_usuario'];
            $model = new CategoriasModel();
            $verificar = $model->verificarPermiso($id_user, 'categorias');
            if(!empty($verificar) || $id_user == 1){
                $this->views->getView($this, "index");
            }else{
                header('Location: '.base_url.'Errors/permisos');
            }
        }

        public function listar(){
            $data = $this->model->getCategorias();
            for($i=0; $i < count($data); $i++){ 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarCategory('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarCategory('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarCategory('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $nombre = $_POST['nombre'];
            $id = $_POST['id'];

            if(empty($nombre)){
                $msg = "Todos los campos son obligatorios!";
            }else{  
                if($id == ""){
                        $data = $this->model->registrarCategoria($nombre);
                    
                        if($data == "Ok"){
                            $msg = "Si";
                        }else if($data == "Existe"){
                            $msg = "La categoria ya existe!";
                        }else{
                            $msg = "Error al registrar la categoria!";
                        }
                }else{
                    $data = $this->model->modificarCategoria($nombre, $id);
                    
                    if($data == "Modificado"){
                        $msg = "Modificado";
                    }else{
                        $msg = "Error al modificar la categoria!";
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarCategory($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionCategory(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar la categoria!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionCategory(1, $id);
            
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