<!DOCTYPE html>
<html class="html">
<head>
    <meta charset="UTF-8">
    <title>Página no encontrada</title>
    <link href="<?php echo base_url; ?>Assets/css/estilos.css" rel="stylesheet" />
</head>

<body class="body">
    <div class="content">
        <a href="<?php echo base_url; ?>Administracion/home" class="pagina">
            SHOP SYSTEM
        </a>
        <hr>
        <span class="tags">Página no Encontrada</span>
        <p class="p">
            <strong>
                ¡Vaya! Algo salió mal.
            </strong>
            <br><br>
            La página que buscas no existe, ponte en contacto con el administrador.
        </p>
    </div>
    <script>
        window.addEventListener('resize', function() {
        location.reload(); // Recarga la página al cambiar el tamaño de la ventana
        });
    </script>
</body>

</html>