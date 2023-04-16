<?php
    class Usuarios extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            if(empty($_SESSION['activo'])){
                header("location: ".base_url);
            }
            $data['cajas'] = $this->model->getCajas();
            $this->views->getView($this, "index", $data);
        }

        public function listar(){
            $data = $this->model->getUsuarios();
            for($i=0; $i < count($data); $i++){ 
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarUser('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarUser('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarUser('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function validar(){
            if(empty($_POST['usuario']) || empty($_POST['clave'])){
                $msg = "Los campos estan vacíos";
            }else{
                $usuario = $_POST['usuario'];
                $clave = $_POST['clave'];
                $encriptar = hash("sha256", $clave);
                $data = $this->model->getUsuario($usuario, $encriptar);

                if($data){
                    $_SESSION['id_usuario'] = $data['id'];
                    $_SESSION['usuario'] = $data['usuario'];
                    $_SESSION['nombre'] = $data['nombre'];
                    $_SESSION['activo'] = true;

                    $msg = "Ok";
                }else{
                    $msg = "Usuario/contraseña incorrecta";
                }
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $usuario = $_POST['usuario'];
            $nombre = $_POST['nombre'];
            $clave = $_POST['clave'];
            $confirmar = $_POST['confirmar'];
            $caja = $_POST['caja'];
            $id = $_POST['id'];
            $encriptar = hash("sha256", $clave);

            if(empty($usuario) || empty($nombre) || empty($caja)){
                $msg = "Todos los campos son obligatorios!";
            }else{
                if($id == ""){
                    if($clave != $confirmar){
                        $msg = "Las contraseñas no coinciden";
                    }else{
                        $data = $this->model->registrarUsuario($usuario, $nombre, $encriptar, $caja);
                    
                        if($data == "Ok"){
                            $msg = "Si";
                        }else if($data == "Existe"){
                            $msg = "El usuario ya existe!";
                        }else{
                            $msg = "Error al registrar el usuario!";
                        }
                    }
                }else{
                    $data = $this->model->modificarUsuario($usuario, $nombre, $caja, $id);
                    
                    if($data == "Modificado"){
                        $msg = "Modificado";
                    }else{
                        $msg = "Error al modificar el usuario!";
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarUser($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionUser(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar el usuario!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionUser(1, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al reactivar el usuario!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function salir(){
            session_destroy();
            header("location: ".base_url);
        }
    }
?>
