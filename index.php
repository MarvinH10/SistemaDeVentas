<?php
    require_once "Config/Config.php";

    //Este url es el mismo archivo que hacemos mención en '.htaccess'
    //echo $_GET['url'];

    $ruta = !empty($_GET['url']) ? $_GET['url'] : "Home/index";
    //echo $ruta;

    $array = explode("/", $ruta);
    //print_r($array);

    $controller = $array[0];
    $metodo = "index";
    $parametro = "";

    if(!empty($array[1])){
        if(!empty($array[1] != "")){
            $metodo = $array[1];
        }
    }
    //print_r($metodo);

    if(!empty($array[2])){
        if(!empty($array[2] != "")){
            for($i=2; $i < count($array); $i++){
                $parametro .= $array[$i]. ",";
            }
            $parametro = trim($parametro, ",");
        }
    }
    //print_r($parametro);
    //echo $controller;
    //echo $metodo;
    //echo $parametro;

    require_once "Config/App/autoload.php";

    $dirControllers = "Controllers/".$controller.".php";

    if(file_exists($dirControllers)){
        require_once $dirControllers;
        $controller = new $controller();
        if(method_exists($controller, $metodo)){
            $controller->$metodo($parametro);
        }else{
            header('location: '.base_url.'Errors');
        }
    }else{
        header('location: '.base_url.'Errors');
    }
?>
