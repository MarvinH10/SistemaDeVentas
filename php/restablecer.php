<?php
    include './conexion.php';
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $token = substr(md5("ADBCKSJDF".time()."EFGHPOWJDKAW"),0, 16).mt_rand(5, 16);

        include "./correo_reset.php";
        if($enviado){
            $conexion->query("INSERT INTO recuperar_passwords(email, token, codigo) VALUES ('$email', '$token', '$codigo')") 
            or die($conexion->error);
            echo "<script>
                    alert('Verifica tu email para restablecer tu cuenta');
                    window.history.back();
                </script>";
        }
    }else{
        header("Location: ../NewSistemaVentas/");
        exit();
    }
?>