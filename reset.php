<?php 
    if( isset($_GET['email'])  && isset($_GET['token']) ){
        $email=$_GET['email'];
        $token=$_GET['token'];
    }else{
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
    <title>Restablecer</title>
    <link href="./Assets/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <link href="./Assets/css/restablecer.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row justify-content-md-center" style="margin-top:15%">
            <form class="col-3" action="php/verificartoken.php" method="POST">
                <h2>Verifica Codigo</h2>
                <div class="mb-3">
                    <label for="c" class="form-label">Codigo</label>
                    <input type="number" class="form-control" id="c" name="codigo">
                    <input type="hidden" class="form-control" id="c" name="email" value="<?php echo $email;?>">
                    <input type="hidden" class="form-control" id="c" name="token" value="<?php echo $token;?>">
                </div>
                <div class="posicion">
                    <button type="submit" class="btn btn-primary">Verificar</button>
                    <a href="../NewSistemaVentas/" class="btn btn-danger" type="button">Cancelar</a>
                </div>
            </form>
        </div>
    </div>
    <script src="./Assets/js/jquery-3.6.4.min.js"></script>
    <script src="./Assets/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
</body>
</html>