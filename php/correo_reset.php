<?php
if(isset($_POST['email'])){
    // Varios destinatarios
    $para  = $email . ', '; // atención a la coma
    //$para .= 'wez@example.com';

    // título
    $título = 'Restablecer contraseña';
    $codigo = rand(1000, 9999);

    // mensaje
    $mensaje = '
    <html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Restablecer</title>
        </head>
        <body>
            <h1>Shop System</h1>
            <div style="text-align:center; background-color:#ccc">
                <p>Restablecer Contraseña</p>
                <h3>'.$codigo.'</h3>
                <p>
                    <a href="http://localhost/VisualStudioCode/NewSistemaVentas/reset.php?email='.$email.'&token='.$token.'">
                        Para restablecer da click aqui!
                    </a>
                </p>
                <p><small>Si usted no envio este codigo favor de omitir</small></p>
            </div>
        </body>
    </html>
    ';

    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
    $cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    /*
    // Cabeceras adicionales
    $cabeceras .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
    $cabeceras .= 'From: Recordatorio <cumples@example.com>' . "\r\n";
    $cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
    $cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";
    */
    // Enviarlo
    $enviado = false;
    if(mail($para, $título, $mensaje, $cabeceras)){
        $enviado = true;
    }
}else{
    header("Location: ../NewSistemaVentas/");
    exit();
}
?>