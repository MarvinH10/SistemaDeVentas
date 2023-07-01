<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/logreg-styles.css">
    <link rel="stylesheet" href="<?php echo base_url; ?>Assets/css/botones.css">
    <script src="<?php echo base_url; ?>Assets/js/all.min.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="wrapper">
        <div class="form-box login">
            <h2>Iniciar Sesión</h2>
            <form id="formLogin">
                <div class="input-box">
                    <span class="icon"><ion-icon name="person"></ion-icon></span>
                    <input class="form-control py-4" id="usuario" name="usuario" type="text" required />
                    <label>Usuario</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input class="form-control py-4" id="clave" name="clave" type="password" required />
                    <label>Contraseña</label>
                </div>
                <div class="contenedor">
                    <div class="contenedor-botones">
                        <button class="boton dos" type="submit" onclick="formLogin(event);"><span>Entrar</span></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <script src="<?php echo base_url; ?>Assets/js/login.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script>
        const base_url = "<?php echo base_url; ?>"
    </script>
</body>
</html>