<?php
    class Productos extends Controller{
        public function __construct(){
            session_start();
            parent::__construct();
        }

        public function index(){
            $id_user = $_SESSION['id_usuario'];
            $model = new ProductosModel();
            $verificar = $model->verificarPermiso($id_user, 'productos');
            if(!empty($verificar) || $id_user == 1){
                if(empty($_SESSION['activo'])){
                    header("location: ".base_url);
                }
                $data['medidas'] = $this->model->getMedidas();
                $data['categorias'] = $this->model->getCategorias();
                $this->views->getView($this, "index", $data);
            }else{
                header('Location: '.base_url.'Errors/permisos');
            }
        }

        public function listar(){
            $data = $this->model->getProductos();
            for($i=0; $i < count($data); $i++){ 
                $data[$i]['imagen'] = '<img class="img-thumbnail" src="'.base_url."Assets/img/".$data[$i]['foto'].'" width="100">';
                if($data[$i]['estado'] == 1){
                    $data[$i]['estado'] = '<span class="badge badge-success">Activo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-warning" type="button" onclick="btnEditarProduct('.$data[$i]['id'].');"><i class="fas fa-edit"></i> Editar</button>
                        <button class="btn btn-danger" type="button" onclick="btnEliminarProduct('.$data[$i]['id'].');"><i class="fas fa-trash-alt"></i> Eliminar</button>
                    </div>';
                }else{
                    $data[$i]['estado'] = '<span class="badge badge-secondary">Inactivo</span>';
                    $data[$i]['acciones'] = '<div>
                        <button class="btn btn-success" type="button" onclick="btnReactivarProduct('.$data[$i]['id'].');"><i class="fa-solid fa-rotate-left"></i> Reactivar</button>
                    </div>';
                }
            }
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function registrar(){
            $codigo = $_POST['codigo'];
            $nombre = $_POST['nombre'];
            $precio_compra = $_POST['precio_compra'];
            $precio_venta = $_POST['precio_venta'];
            $medida = $_POST['medida'];
            $categoria = $_POST['categoria'];
            $id = $_POST['id'];
            $img = $_FILES['imagen'];
            $name = $img['name'];
            $tmpname = $img['tmp_name'];
            $fecha = date("YmdHis");

            if(empty($codigo) || empty($nombre) || empty($precio_compra) || empty($precio_venta)){
                //$msg = "Todos los campos son obligatorios!";
                $msg = array('msg' => 'Todos los campos son obligatorios!', 'icono' => 'warning');
            }else{
                if(!empty($name)){
                    $imgNombre = $fecha.".jpg";
                    $destino = "Assets/img/".$imgNombre;
                }else if(!empty($_POST['foto_actual']) && empty($name)){
                    $imgNombre = $_POST['foto_actual'];
                }else{
                    $imgNombre = "default.png";
                }
                if($id == ""){
                    $data = $this->model->registrarProducto($codigo, $nombre, $precio_compra, $precio_venta, $medida, $categoria, $imgNombre);
                    
                    if($data == "Ok"){
                        if(!empty($name)){
                            move_uploaded_file($tmpname, $destino);
                        }
                        $msg = array('msg' => 'Producto registrado con éxito!', 'icono' => 'success');
                    }else if($data == "Existe"){
                        $msg = array('msg' => 'El producto ya existe!', 'icono' => 'warning');
                    }else{
                        $msg = array('msg' => 'Error al registrar el producto!', 'icono' => 'error');
                    }
                }else{
                    $imagenDelete = $this->model->editarProduct($id);
                    if($imagenDelete['foto'] != 'default.png'){
                        if(file_exists("Assets/img/".$imagenDelete['foto'])){
                                unlink("Assets/img/".$imagenDelete['foto']);
                        }
                    }
                    $data = $this->model->modificarProducto($codigo, $nombre, $precio_compra, $precio_venta, $medida, $categoria, $imgNombre, $id);
                    
                    if($data == "Modificado"){
                        if(!empty($name)){
                            move_uploaded_file($tmpname, $destino);
                        }
                        $msg = array('msg' => 'Producto modificado con éxito!', 'icono' => 'success');
                        
                    }else{
                        $msg = array('msg' => 'Error al modificar el producto!', 'icono' => 'error');
                    }
                }
                
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
        
        public function editar(int $id){
            $data = $this->model->editarProduct($id);
            echo json_encode($data, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function eliminar(int $id){
            $data = $this->model->accionProduct(0, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al eliminar el Producto!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }

        public function reactivar(int $id){
            $data = $this->model->accionProduct(1, $id);
            
            if($data == 1){
                $msg = "Ok";
            }else{
                $msg = "Error al reactivar el Producto!";
            }
            echo json_encode($msg, JSON_UNESCAPED_UNICODE);
            die();
        }
    }
?>