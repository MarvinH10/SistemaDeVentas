<!DOCTYPE html>
<html class="html">
<head>
    <meta charset="UTF-8">
    <title>No tienes permisos</title>
    <link href="<?php echo base_url; ?>Assets/css/estilos.css" rel="stylesheet" />
</head>

<body class="body">
    <div class="content">
        <a href="<?php echo base_url; ?>Administracion/home" class="pagina">
            SHOP SYSTEM
        </a>
        <hr>
        <span class="tags">No tienes permisos</span>
        <p class="p">
            <strong>
                ¡Vaya! Ya no tienes permiso.
            </strong>
            <br><br>
            El administrador no te asigno el permiso a este módulo.
        </p>
    </div>
    <script>
        window.addEventListener('resize', function() {
        location.reload(); // Recarga la página al cambiar el tamaño de la ventana
        });
    </script>
</body>

</html>