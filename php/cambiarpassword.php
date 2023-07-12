<?php 
    include "./conexion.php";
    if(isset($_POST['email'])){
        $email =$_POST['email'];
        $p1 =$_POST['p1'];
        $p2 =$_POST['p2'];
        if($p1 == $p2){
            $encriptar = hash("sha256", $p1);
            $conexion->query("UPDATE usuarios SET clave='$encriptar' where email='$email' ")or die($conexion->error);
            echo "<script>
                    alert('Todo correcto!');
                    window.location.href = '../';
                </script>";
        }else{
            echo "<script>
                    alert('Las contraseñas no coinciden!');
                    window.history.back();
                </script>";
        }
    }else{
        header("Location: ../NewSistemaVentas/");
        exit();
    }
?>