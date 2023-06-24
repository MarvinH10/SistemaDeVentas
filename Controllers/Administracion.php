<?php
class Administracion extends Controller{
    public function __construct(){
        session_start();
        if(empty($_SESSION['activo'])){
            header("location: ".base_url);
        }
        parent::__construct();
    }
    
    public function index(){
        $data = $this->model->getEmpresa();
        $this->views->getView($this, "index", $data);
    }

    public function home(){
        $data['usuarios'] = $this->model->getDatos('usuarios');
        $data['clientes'] = $this->model->getDatos('clientes');
        $data['productos'] = $this->model->getDatos('productos');
        $data['caja'] = $this->model->getDatos('caja');
        $data['categorias'] = $this->model->getDatos('categorias');
        $data['medidas'] = $this->model->getDatos('medidas');
        $data['ventas'] = $this->model->getVentas('estado');
        $data['compras'] = $this->model->getCompras();
        $this->views->getView($this, "home", $data);
    }

    public function modificar(){
        $nombre = $_POST['nombre'];
        $fono = $_POST['telefono'];
        $direccion = $_POST['direccion'];
        $mensaje = $_POST['mensaje'];
        $id = $_POST['id'];
        $data = $this->model->modificar($nombre, $fono, $direccion, $mensaje, $id);
        if($data == "Ok"){
            $msg = "Ok";
        }else{
            $msg = "Error";
        }
        echo json_encode($msg);
        die();
    }

    public function reporteStock(){
        $data = $this->model->getStockMinimo();
        echo json_encode($data);
        die();
    }

    public function productosVendidos(){
        $data = $this->model->getproductosVendidos();
        echo json_encode($data);
        die();
    }
}
?>