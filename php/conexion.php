<?php 
    $conexion = new mysqli('localhost','root','','sistemaventas');
    if($conexion->connect_error){
        die('No se pudo conectar al servidor');
    }
?>