let tblUsuarios, tblCajas, tblClientes, tblMedidas, tblCategorias, tblProductos, t_historial_c, t_historial_v, tblArqueo;
document.addEventListener("DOMContentLoaded", function(){
    $('#cliente').select2();
    //tblUsuarios
    tblUsuarios = $('#tblUsuarios').DataTable( {
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'usuario'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'caja'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblCajas
    tblCajas = $('#tblCajas').DataTable( {
        ajax: {
            url: base_url + "Cajas/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'caja'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblClientes
    tblClientes = $('#tblClientes').DataTable( {
        ajax: {
            url: base_url + "Clientes/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'dni'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'telefono'
            },
            {
                'data' : 'direccion'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblMedidas
    tblMedidas = $('#tblMedidas').DataTable( {
        ajax: {
            url: base_url + "Medidas/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'nombre_corto'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblCategorias
    tblCategorias = $('#tblCategorias').DataTable( {
        ajax: {
            url: base_url + "Categorias/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblProductos
    tblProductos = $('#tblProductos').DataTable( {
        ajax: {
            url: base_url + "Productos/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'imagen'
            },
            {
                'data' : 'codigo'
            },
            {
                'data' : 'descripcion'
            },
            {
                'data' : 'precio_venta'
            },
            {
                'data' : 'cantidad'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]    
    } );
    //t_historial_c
    t_historial_c = $('#t_historial_c').DataTable( {
        ajax: {
            url: base_url + "Compras/listar_historial",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'total'
            },
            {
                'data' : 'fecha'
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //t_historial_v
    t_historial_v = $('#t_historial_v').DataTable( {
        ajax: {
            url: base_url + "Compras/listar_historial_venta",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'nombre'
            },
            {
                'data' : 'total'
            },
            {
                'data' : null,
                'render': function(data, type, row) {
                    // Concatenar fecha y hora
                    var fechaHora = row.fecha + ' / ' + row.hora;
                    return fechaHora;
                }
            },
            {
                'data' : 'estado'
            },
            {
                'data' : 'acciones'
            }
        ],
        language: {
            "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
        },
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
    //tblArqueo
    tblArqueo = $('#tblArqueo').DataTable( {
        ajax: {
            url: base_url + "Cajas/listar_arqueo",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id'
            },
            {
                'data' : 'monto_inicial'
            },
            {
                'data' : 'monto_final'
            },
            {
                'data' : 'fecha_apertura'
            },
            {
                'data' : 'fecha_cierre'
            },
            {
                'data' : 'total_ventas'
            },
            {
                'data' : 'monto_total'
            },
            {
                'data' : 'estado'
            }
        ],
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
                "<'row'<'col-sm-12'tr>>" +
                "<'row'<'col-sm-5'i><'col-sm-7' p>>",
        buttons: [{
            //Botón para Excel
            extend: 'excelHtml5',
            footer: true,
            title: 'Archivo',
            filename: 'Export_File',

            //Aquí es donde generas el botón personalizado
            text: '<span class="badge badge-success"><i class="fas fa-file-excel"></i></span>'
        },
        //Botón para PDF
        {
            extend: 'pdfHtml5',
            download: 'open',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para copiar
        {
            extend: 'copyHtml5',
            footer: true,
            title: 'Reporte de usuarios',
            filename: 'Reporte de usuarios',
            text: '<span class="badge  badge-primary"><i class="fas fa-copy"></i></span>',
            exportOptions: {
                columns: [0, ':visible']
            }
        },
        //Botón para print
        {
            extend: 'print',
            footer: true,
            filename: 'Export_File_print',
            text: '<span class="badge badge-light"><i class="fas fa-print"></i></span>'
        },
        //Botón para cvs
        {
            extend: 'csvHtml5',
            footer: true,
            filename: 'Export_File_csv',
            text: '<span class="badge  badge-success"><i class="fas fa-file-csv"></i></span>'
        },
        {
            extend: 'colvis',
            text: '<span class="badge  badge-info"><i class="fas fa-columns"></i></span>',
            postfixButtons: ['colvisRestore']
        }
        ]
    } );
});

function formCambiarPass(e){
    e.preventDefault();
    const actual = document.getElementById('clave_actual').value;
    const nueva = document.getElementById('clave_nueva').value;
    const confirmar = document.getElementById('confirmar_clave').value;
    if(actual == '' || nueva == '' || confirmar == ''){
        alertas('Todos los campos son obligatorios!', 'warning');
        return false;
    }else{
        if(nueva != confirmar){
            alertas('Las contraseñas no coinciden!', 'warning');
            return false;
        }else{
            const url = base_url + "Usuarios/cambiarPass";
            const form = document.getElementById("formCambiarPass");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(form));
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    $("#cambiarPass").modal("hide");
                    form.reset();
                }
            }
        }
    }
}

//Funciones Usuarios
function formUsuario(){
    document.getElementById("titulo").innerHTML = "Nuevo Usuario";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("formUsuario").reset();
    $("#nuevo_usuario").modal("show");
    document.getElementById("id").value = "";
}
function registrarUser(e){
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const nombre = document.getElementById("nombre");
    const caja = document.getElementById("caja");

    if(usuario.value == "" || nombre.value == "" || caja.value == ""){
        alertas('Todos los campos son obligatorios!', 'warning');
    }else{
        const url = base_url + "Usuarios/registrar";
        const form = document.getElementById("formUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                $("#nuevo_usuario").modal("hide");
                alertas(resultado.msg, resultado.icono);
                tblUsuarios.ajax.reload();
            }
        }
    }
}
function btnEditarUser(id){
    document.getElementById("titulo").innerHTML = "Actualizar Usuario";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Usuarios/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("usuario").value = resultado.usuario;
                document.getElementById("nombre").value = resultado.nombre;
                document.getElementById("caja").value = resultado.id_caja;
                document.getElementById("claves").classList.add("d-none");
                $("#nuevo_usuario").modal("show");
            }
        }
}
function btnEliminarUser(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "El usuario no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Usuario";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Usuarios/eliminar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        alertas(resultado.msg, resultado.icono);
                        tblUsuarios.ajax.reload();
                    }
                }
        }
    })
}
function btnReactivarUser(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Usuario";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Usuarios/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        alertas(resultado.msg, resultado.icono);
                        tblUsuarios.ajax.reload();
                    }
                }
        }
    })
}

//Funciones Cajas
function formCaja(){ 
    document.getElementById("titulo").innerHTML = "Nueva Caja";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("formCaja").reset();
    $("#nuevo_caja").modal("show");
    document.getElementById("id").value = "";
}
function registrarBox(e){
    e.preventDefault();
    const caja = document.getElementById("caja");

    if(caja.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Cajas/registrar";
        const form = document.getElementById("formCaja");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                if(resultado == "Si"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Caja registrado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_caja").modal("hide");
                      tblCajas.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Caja modificado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_caja").modal("hide");
                      tblCajas.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: resultado,
                        showConfirmButton: false,
                        timer: 3000
                      })
                }
            }
        }
    }
}
function btnEditarBox(id){
    document.getElementById("titulo").innerHTML = "Actualizar Caja";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Cajas/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("caja").value = resultado.caja;
                $("#nuevo_caja").modal("show");
            }
        }
}
function btnEliminarBox(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "La caja no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Caja";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Cajas/eliminar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Caja eliminado con éxito.',
                                'success'
                            )
                            tblCajas.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}
function btnReactivarBox(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Caja";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Cajas/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Caja reactivado con éxito.',
                                'success'
                            )
                            tblCajas.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}

//Funciones Clientes
function formCliente(){ 
    document.getElementById("titulo").innerHTML = "Nuevo Cliente";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("formCliente").reset();
    $("#nuevo_cliente").modal("show");
    document.getElementById("id").value = "";
}
function registrarClient(e){
    e.preventDefault();
    const dni = document.getElementById("dni");
    const nombre = document.getElementById("nombre");
    const telefono = document.getElementById("telefono");
    const direccion = document.getElementById("direccion");

    if(dni.value == "" || nombre.value == "" || telefono.value == "" || direccion.value == ""){
        alertas(resultado.msg, resultado.icono);
    }else{
        const url = base_url + "Clientes/registrar";
        const form = document.getElementById("formCliente");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                if(resultado == "Si"){
                    alertas(resultado.msg, resultado.icono);
                    form.reset();
                    $("#nuevo_cliente").modal("hide");
                }else if(resultado == "Modificado"){
                    alertas(resultado.msg, resultado.icono);
                    $("#nuevo_cliente").modal("hide");
                    
                }else{
                    alertas(resultado.msg, resultado.icono);
                }
                tblClientes.ajax.reload();
            }
        }
    }
}
function btnEditarClient(id){
    document.getElementById("titulo").innerHTML = "Actualizar Cliente";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Clientes/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("dni").value = resultado.dni;
                document.getElementById("nombre").value = resultado.nombre;
                document.getElementById("telefono").value = resultado.telefono;
                document.getElementById("direccion").value = resultado.direccion;
                $("#nuevo_cliente").modal("show");
            }
        }
}
function btnEliminarClient(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "El cliente no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Cliente";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
            const url = base_url + "Clientes/eliminar/" +  id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    if(resultado == "Ok"){
                        alertas(resultado.msg, resultado.icono);
                    }else{
                        alertas(resultado.msg, resultado.icono);
                    }
                    tblClientes.ajax.reload();
                }
            }
        }
    })
}
function btnReactivarClient(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Cliente";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Clientes/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Cliente reactivado con éxito.',
                                'success'
                            )
                            tblClientes.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}

//Funciones Medidas
function formMedida(){
    document.getElementById("titulo").innerHTML = "Nueva Medida";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("formMedida").reset();
    $("#nuevo_medida").modal("show");
    document.getElementById("id").value = "";
}
function registrarMedid(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const nombre_corto = document.getElementById("nombre_corto");

    if(nombre.value == "" || nombre_corto.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Medidas/registrar";
        const form = document.getElementById("formMedida");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                if(resultado == "Si"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Medida registrada correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_medida").modal("hide");
                      tblMedidas.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Medida modificada correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_medida").modal("hide");
                      tblMedidas.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: resultado,
                        showConfirmButton: false,
                        timer: 3000
                      })
                }
            }
        }
    }
}
function btnEditarMedid(id){
    document.getElementById("titulo").innerHTML = "Actualizar Medida";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Medidas/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("nombre").value = resultado.nombre;
                document.getElementById("nombre_corto").value = resultado.nombre_corto;
                $("#nuevo_medida").modal("show");
            }
        }
}
function btnEliminarMedid(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "La medida no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Medida";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Medidas/eliminar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Medida eliminado con éxito.',
                                'success'
                            )
                            tblMedidas.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}
function btnReactivarMedid(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Medida";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Medidas/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Medida reactivado con éxito.',
                                'success'
                            )
                            tblMedidas.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}

//Funciones Categorias
function formCategoria(){
    document.getElementById("titulo").innerHTML = "Nueva Categoria";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("formCategoria").reset();
    $("#nuevo_categoria").modal("show");
    document.getElementById("id").value = "";
}
function registrarCategory(e){
    e.preventDefault();
    const nombre = document.getElementById("nombre");

    if(nombre.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Categorias/registrar";
        const form = document.getElementById("formCategoria");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                if(resultado == "Si"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categoria registrado correctamente!',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_categoria").modal("hide");
                      tblCategorias.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Categoria modificado correctamente!',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_categoria").modal("hide");
                      tblCategorias.ajax.reload();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: resultado,
                        showConfirmButton: false,
                        timer: 3000
                      })
                }
            }
        }
    }
}
function btnEditarCategory(id){
    document.getElementById("titulo").innerHTML = "Actualizar Categoria";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Categorias/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("nombre").value = resultado.nombre;
                $("#nuevo_categoria").modal("show");
            }
        }
}
function btnEliminarCategory(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "La categoria no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Categoria";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Categorias/eliminar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Categoria eliminado con éxito.',
                                'success'
                            )
                            tblCategorias.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}
function btnReactivarCategory(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Categoria";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Categorias/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Cliente reactivado con éxito.',
                                'success'
                            )
                            tblCategorias.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}

//Funciones Productos
function formProducto (){
    document.getElementById("titulo").innerHTML = "Nuevo Producto";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("formProducto").reset();
    $("#nuevo_producto").modal("show");
    document.getElementById("id").value = "";
    deleteImg();
}
function registrarProduct(e){
    e.preventDefault();
    const codigo = document.getElementById("codigo");
    const nombre = document.getElementById("nombre");
    const precio_compra = document.getElementById("precio_compra");
    const precio_venta = document.getElementById("precio_venta");
    const id_medida = document.getElementById("medida");
    const id_categoria = document.getElementById("categoria");

    if(codigo.value == "" || nombre.value == "" || precio_compra.value == "" || precio_venta.value == ""){
          alertas('Todos los campos son obligatorios!', 'warning');
    }else{
        const url = base_url + "Productos/registrar";
        const form = document.getElementById("formProducto");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                if(resultado == "Si"){
                    alertas(resultado.msg, resultado.icono);
                    form.reset();
                    $("#nuevo_producto").modal("hide");
                }else if(resultado == "Modificado"){
                    alertas(resultado.msg, resultado.icono);
                    $("#nuevo_producto").modal("hide");
                }else{
                    alertas(resultado.msg, resultado.icono);
                }
                tblProductos.ajax.reload();
            }
        }
    }
}
function btnEditarProduct(id){
    document.getElementById("titulo").innerHTML = "Actualizar Producto";
    document.getElementById("btnAccion").innerHTML = "Actualizar";
    
        const url = base_url + "Productos/editar/" +  id;
        const http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.send();
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const resultado = JSON.parse(this.responseText);
                document.getElementById("id").value = resultado.id;
                document.getElementById("codigo").value = resultado.codigo;
                document.getElementById("nombre").value = resultado.descripcion;
                document.getElementById("precio_compra").value = resultado.precio_compra;
                document.getElementById("precio_venta").value = resultado.precio_venta;
                document.getElementById("medida").value = resultado.id_medida;
                document.getElementById("categoria").value = resultado.id_categoria;
                document.getElementById("img-preview").src = base_url + 'Assets/img/' + resultado.foto;
                document.getElementById("icon-cerrar").innerHTML = `
                <button class="btn btn-danger" onclick="deleteImg()">
                <i class="fas fa-times"></i></button><br>`;
                document.getElementById("icon-image").classList.add("d-none");
                document.getElementById("foto_actual").value = resultado.foto;
                $("#nuevo_producto").modal("show");
            }
        }
}
function btnEliminarProduct(id){
    Swal.fire({
        title: '¿Estas seguro?',
        text: "El producto no se eliminará de forma permanente, solo pasará a estado inactivo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Producto";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Productos/eliminar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Producto eliminado con éxito.',
                                'success'
                            )
                            tblProductos.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}
function btnReactivarProduct(id){
    Swal.fire({
        title: '¿Estas seguro de rectivarlo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, reactivarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            document.getElementById("titulo").innerHTML = "Actualizar Producto";
            document.getElementById("btnAccion").innerHTML = "Actualizar";
            
                const url = base_url + "Productos/reactivar/" +  id;
                const http = new XMLHttpRequest();
                http.open("GET", url, true);
                http.send();
                http.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status == 200){
                        const resultado = JSON.parse(this.responseText);
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Producto reactivado con éxito.',
                                'success'
                            )
                            tblProductos.ajax.reload();
                        }else{
                            Swal.fire(
                                'Mensaje!',
                                resultado,
                                'error'
                            )
                        }
                    }
                }
        }
    })
}
function preview(e){
    const url = e.target.files[0];
    const urlTmp = URL.createObjectURL(url);
    document.getElementById("img-preview").src = urlTmp;
    document.getElementById("icon-image").classList.add("d-none");
    document.getElementById("icon-cerrar").innerHTML = `
    <button class="btn btn-danger" onclick="deleteImg()"><i class="fas fa-times"></i></button>
    ${url['name']}<br>`;
}
function deleteImg(){
    document.getElementById("icon-cerrar").innerHTML = '';
    document.getElementById("icon-image").classList.remove("d-none");
    document.getElementById("img-preview").src = '';
    document.getElementById("imagen").value = '';
    document.getElementById("foto_actual").value = '';
}
function buscarCodigo(e){
    e.preventDefault();
    const cod = document.getElementById("codigo").value;
    if(cod != ''){
        if(e.which == 13){ 
            const url = base_url + "Compras/buscarCodigo/" +  cod;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    if(resultado){
                        document.getElementById("nombre").value = resultado.descripcion;
                        document.getElementById("precio").value = resultado.precio_compra;
                        document.getElementById("id").value = resultado.id;
                        document.getElementById("cantidad").removeAttribute('disabled');
                        document.getElementById("cantidad").focus();
                    }else{
                        alertas('El producto no existe!', 'warning');
                        document.getElementById("codigo").value = '';
                        document.getElementById("codigo").focus();
                    }
                }
            }  
        }
    }else{
        alertas('Ingrese el código!', 'warning');
    }
}
function buscarCodigoVenta(e){
    e.preventDefault();
    const cod = document.getElementById("codigo").value;
    if(cod != ''){
        if(e.which == 13){ 
            const url = base_url + "Compras/buscarCodigo/" +  cod;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    if(resultado){
                        document.getElementById("nombre").value = resultado.descripcion;
                        document.getElementById("precio").value = resultado.precio_venta;
                        document.getElementById("id").value = resultado.id;
                        document.getElementById("cantidad").removeAttribute('disabled');
                        document.getElementById("cantidad").focus();
                    }else{
                        alertas('El producto no existe!', 'warning');
                        document.getElementById("codigo").value = '';
                        document.getElementById("codigo").focus();
                    }
                }
            }  
        }
    }else{
        alertas('Ingrese el código!', 'warning');
    }
}
function calcularPrecioVenta(e){
    e.preventDefault();
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cantidad;
    if(e.which == 13){
            if(cantidad > 0){
            const url = base_url + "Compras/ingresarVenta/";
            const form = document.getElementById("formVenta");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(form));
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    form.reset();
                    cargarDetalleVenta();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    document.getElementById('codigo').focus();
                }
            }  
        }
    }
}
function calcularPrecio(e){
    e.preventDefault();
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;
    document.getElementById("sub_total").value = precio * cantidad;
    if(e.which == 13){
            if(cantidad > 0){
            const url = base_url + "Compras/ingresar/";
            const form = document.getElementById("formCompra");
            const http = new XMLHttpRequest();
            http.open("POST", url, true);
            http.send(new FormData(form));
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    form.reset();
                    cargarDetalle();
                    document.getElementById('cantidad').setAttribute('disabled', 'disabled');
                    document.getElementById('codigo').focus();
                }
            }  
        }
    }
}
if(document.getElementById('tblDetalle')){
    cargarDetalle();   
}
if(document.getElementById('tblDetalleVenta')){
    cargarDetalleVenta();   
}
function cargarDetalle(){
    const url = base_url + "Compras/listar/detalle";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            let html = '';
            resultado.detalle.forEach(row => {
                html += `<tr>
                    <td>${row['id']}</td>
                    <td>${row['descripcion']}</td>
                    <td>${row['cantidad']}</td>
                    <td>${row['precio']}</td>
                    <td>${row['sub_total']}</td>
                    <td>
                        <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']}, 1)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>`;
            });
            document.getElementById("tblDetalle").innerHTML = html;
            document.getElementById("total").value = resultado.total_pagar.total;
        }
    }  
}
function cargarDetalleVenta(){
    const url = base_url + "Compras/listar/detalle_temp";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            let html = '';
            resultado.detalle.forEach(row => {
                html += `<tr>
                    <td>${row['id']}</td>
                    <td>${row['descripcion']}</td>
                    <td>${row['cantidad']}</td>
                    <td><input class="form-control" placeholder="Desc" type="text" onkeyup="calcularDescuento(event, ${row['id']})"></td>
                    <td>${row['descuento']}</td>
                    <td>${row['precio']}</td>
                    <td>${row['sub_total']}</td>
                    <td>
                        <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']}, 2)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>`;
            });
            document.getElementById("tblDetalleVenta").innerHTML = html;
            document.getElementById("total").value = resultado.total_pagar.total;
        }
    }  
}
function calcularDescuento(e, id){
    e.preventDefault();
    if(e.target.value == ''){
        alertas('Ingrese el descuento!', 'warning');
    }else{
        if(e.which == 13){
            const url = base_url + "Compras/calcularDescuento/" + id + "/" + e.target.value;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    console.log(this.responseText);
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    cargarDetalleVenta();
                }
            } 
        }
    }
}
function deleteDetalle(id, accion){
    let url;
    if(accion == 1){
        url = base_url + "Compras/delete/"+id;
    }else{
        url = base_url + "Compras/deleteVenta/"+id;
    }
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            if(resultado == "Ok"){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Producto eliminado!',
                    showConfirmButton: false,
                    timer: 3000
                })
                if(accion == 1){
                    cargarDetalle();
                }else{
                    cargarDetalleVenta();
                }
            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Error al eliminar el producto!',
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        }
    }  
}
function procesar(accion){
    Swal.fire({
        title: '¿Estas seguro de realizar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, generarlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            let url;
            if(accion == 1){
                url = base_url + "Compras/registrarCompra";
            }else{
                const id_cliente = document.getElementById('cliente').value;
                url = base_url + "Compras/registrarVenta/" + id_cliente;
            }
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    if(resultado.msg == 'Ok'){
                        alertas(resultado.msg, resultado.icono);
                        let ruta
                        if(accion == 1){
                            ruta = base_url + 'Compras/generarPdf/' + resultado.id_compra;
                        }else{
                            ruta = base_url + 'Compras/generarPdfVenta/' + resultado.id_venta;
                        }
                        window.open(ruta);
                        setTimeout(() => {
                            window.location.reload();
                        }, 300);
                    }else{
                        alertas(resultado.msg, resultado.icono);
                    }
                }
            }
        }
    })
}
function modificarEmpresa(){
    const form = document.getElementById('formEmpresa');
    const url = base_url + "Administracion/modificar";
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(form));
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            if(resultado == "Ok"){
                Swal.fire(
                    'Mensaje!',
                    'Modificado con éxito.',
                    'success'
                )
            }
        }
    }
}
function alertas(mensaje, icono){
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    })
}
if(document.getElementById('stockMinimo')){
    reporteStock();
    productosVendidos();
}
function reporteStock(){
    const url = base_url + "Administracion/reporteStock";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            let nombre = [];
            let cantidad = [];
            for (let i = 0; i < resultado.length; i++) {
                nombre.push(resultado[i]['descripcion']);
                cantidad.push(resultado[i]['cantidad']);
            }
            var ctx = document.getElementById("stockMinimo");
            var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: nombre,
                datasets: [{
                    data: cantidad,
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#ff8000', '#00ffff', '#bf00ff'],
                }],
            },
            });
        }
    }
}
function productosVendidos(){
    const url = base_url + "Administracion/productosVendidos";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            let nombre = [];
            let cantidad = [];
            for (let i = 0; i < resultado.length; i++) {
                nombre.push(resultado[i]['descripcion']);
                cantidad.push(resultado[i]['total']);
            }
            var ctx = document.getElementById("productosVendidos");
            var myPieChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: nombre,
                datasets: [{
                    data: cantidad,
                    backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#ff8000', '#00ffff', '#bf00ff'],
                }],
            },
            });
        }
    }
}
function btnAnularCompra(id){
    Swal.fire({
        title: '¿Estas seguro de anular la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, anularlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            const url = base_url + "Compras/anularCompra/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    t_historial_c.ajax.reload();
                }
            }
        }
    })
}
function btnAnularVenta(id){
    Swal.fire({
        title: '¿Estas seguro de anular la venta?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, anularlo!',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            const url = base_url + "Compras/anularVenta/" + id;
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    alertas(resultado.msg, resultado.icono);
                    t_historial_v.ajax.reload();
                }
            }
        }
    })
}
function arqueoCaja(){
    document.getElementById('ocultar_campos').classList.add('d-none');
    document.getElementById('monto_inicial').value = '';
    document.getElementById('btnAccion').innerHTML = 'Abrir Caja';
    $('#abrir_caja').modal('show');
}
function abrirArqueo(e){
    e.preventDefault();
    const monto_inicial = document.getElementById('monto_inicial').value;
    if(monto_inicial == ''){
        alertas('Ingrese el Monto Inicial', 'warning');
    }else{
        const form = document.getElementById('formAbrirCaja');
        const url = base_url + "Cajas/abrirArqueo";
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                try {
                    const resultado = JSON.parse(this.responseText);
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                    alertas(resultado.msg, resultado.icono);
                    tblArqueo.ajax.reload();
                    $('#abrir_caja').modal('hide');
                }catch(error){
                    setTimeout(function () {
                        location.reload();
                    }, 1000);
                    alertas("No puedes cerrar caja, porque aún no hay ventas!", "warning");
                }
            }
        }
    }
}
function cerrarCaja(){
    const url = base_url + "Cajas/getVentas";
    const http = new XMLHttpRequest();
    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            try {
                const resultado = JSON.parse(this.responseText);
                document.getElementById('monto_final').value = resultado.monto_total.total;
                document.getElementById('total_ventas').value = resultado.total_ventas.total;
                document.getElementById('monto_inicial').value = resultado.inicial.monto_inicial;
                document.getElementById('monto_general').value = resultado.monto_general;
                document.getElementById('id').value = resultado.inicial.id;
                document.getElementById('ocultar_campos').classList.remove('d-none');
                document.getElementById('btnAccion').innerHTML = 'Cerrar Caja';
                $('#abrir_caja').modal('show');
            }catch(error){
                setTimeout(function () {
                    location.reload();
                }, 1000);
                alertas("No puedes cerrar caja, porque no hay una abierta!", "warning");
            }
        }
    }
}
function registrarPermisos(e){
    e.preventDefault();
    const url = base_url + "Usuarios/registrarPermiso";
    const form = document.getElementById('formulario');
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.send(new FormData(form));
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const resultado = JSON.parse(this.responseText);
            if(resultado != ''){
                alertas(resultado.msg, resultado.icono);
            }else{
                alertas('Error no identificado!', 'error');
            }
        }
    }
}

















// function verificarHora() {
//     const horaActual = new Date().getHours();

//     // Define la hora en la que deseas cerrar la caja (por ejemplo, a las 23:59)
//     const horaCierre = 23;
//     const minutoCierre = 59;

//     // Verifica si es la hora de cerrar la caja
//     if (horaActual === horaCierre && new Date().getMinutes() >= minutoCierre) {
//         cerrarCaja();
//     }
// }

// // Verifica la hora cada minuto
// setInterval(verificarHora, 60000); // Verifica cada 60 segundos