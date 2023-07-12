<?php
    session_start();

    if(isset($_SESSION['usuario'])){
        header("location: Administracion/home");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restablecer</title>
    <link href="./Assets/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link href="./Assets/css/restablecer.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row justify-content-md-center" style="margin-top:15%">
            <form class="col-3" action="./php/restablecer.php" method="POST">
                <h2>Restablecer Contraseña</h2>
                <div class="mb-3">
                    <label for="c" class="form-label">Email</label>
                    <input type="email" class="form-control" id="c" name="email" required>
                </div>
                <div class="posicion">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                    <a href="Administracion/home" class="btn btn-danger" type="button">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
    <script src="./Assets/js/jquery-3.6.4.min.js"></script>
    <script src="./Assets/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>