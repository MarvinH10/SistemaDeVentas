<?php
    include "./conexion.php";
    if(isset($_POST['email']) && isset($_POST['token']) && isset($_POST['codigo'])){
        $email = $_POST['email'];
        $token = $_POST['token'];
        $codigo = $_POST['codigo'];
        $res=$conexion->query("select * from recuperar_passwords where 
            email='$email' and token='$token' and codigo=$codigo")or die($conexion->error);
        $correcto=false;
        if(mysqli_num_rows($res) > 0){
            $fila = mysqli_fetch_row($res);
            $fecha =$fila[4];
            $fecha_actual=date("Y-m-d h:m:s");
            $seconds = strtotime($fecha_actual) - strtotime($fecha);
            $minutos=$seconds / 60;
        /* if($minutos > 10 ){
                echo "token vencido";
            }else{
                echo "todo correcto";
            }*/
            $correcto=true;
        }else{
            $correcto=false;
        }
    } else {
        header("Location: ../NewSistemaVentas/");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Contraseña</title>
    <link href="../Assets/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link href="../Assets/css/restablecer.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row justify-content-md-center" style="margin-top:15%">
            <?php if($correcto){ ?>
                <form class="col-3" action="cambiarpassword.php" method="POST">
                    <h2>Restablecer Contraseña</h2>
                    <div class="mb-3">
                        <label for="c" class="form-label">Nueva Contraseña</label>
                        <input type="password" class="form-control" id="c" name="p1" required>
                    
                    </div>
                    <div class="mb-3">
                        <label for="c" class="form-label">Confirmar Contraseña</label>
                        <input type="password" class="form-control" id="c" name="p2" required>
                        <input type="hidden" class="form-control" id="c" name="email" value="<?php echo $email?>">

                    </div>
                    <div class="posicion">
                        <button type="submit" class="btn btn-primary">Cambiar</button>
                        <a href="../NewSistemaVentas/" class="btn btn-danger" type="button">Cancelar</a>
                    </div>
                </form>
            <?php }else{ ?>
                <div class="alert alert-danger" >Código incorrecto o vencido</div>
            <?php } ?>

        </div>
    </div>
    <script src="../Assets/js/jquery-3.6.4.min.js"></script>
    <script src="../Assets/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    <script>
        document.getElementById('cancel-button').addEventListener('click', function() {
            history.back();
        });
    </script>
</body>
</html>