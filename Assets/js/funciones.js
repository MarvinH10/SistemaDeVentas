let tblUsuarios, tblCajas, tblClientes, tblMedidas, tblCategorias, tblProductos, t_historial_c;
document.addEventListener("DOMContentLoaded", function(){
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
                'data' : 'acciones'
            }
        ]
    } );
});

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
    const clave = document.getElementById("clave");
    const confirmar = document.getElementById("confirmar");
    const caja = document.getElementById("caja");

    if(usuario.value == "" || nombre.value == "" || caja.value == ""){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
    }else{
        const url = base_url + "Usuarios/registrar";
        const form = document.getElementById("formUsuario");
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
                        title: 'Usuario registrado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Usuario modificado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_usuario").modal("hide");
                      tblUsuarios.ajax.reload();
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
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Usuario eliminado con éxito.',
                                'success'
                            )
                            tblUsuarios.ajax.reload();
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
                        if(resultado == "Ok"){
                            Swal.fire(
                                'Mensaje!',
                                'Usuario reactivado con éxito.',
                                'success'
                            )
                            tblUsuarios.ajax.reload();
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
            icon: 'error',
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
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
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
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cliente registrado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_cliente").modal("hide");
                      tblClientes.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cliente modificado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_cliente").modal("hide");
                      tblClientes.ajax.reload();
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
                            Swal.fire(
                                'Mensaje!',
                                'Cliente eliminado con éxito.',
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
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son obligatorios!',
            showConfirmButton: false,
            timer: 3000
          })
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
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto registrado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      form.reset();
                      $("#nuevo_producto").modal("hide");
                      tblProductos.ajax.reload();
                }else if(resultado == "Modificado"){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Producto modificado correctamente!   ',
                        showConfirmButton: false,
                        timer: 3000
                      })
                      $("#nuevo_producto").modal("hide");
                      tblProductos.ajax.reload();
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
    if(e.which == 13){
        const cod = document.getElementById("codigo").value; 
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
                    document.getElementById("cantidad").focus();
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'El producto no existe!',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    document.getElementById("codigo").value = '';
                    document.getElementById("codigo").focus();
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
                    if(resultado == "Ok"){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Producto ingresado!   ',
                            showConfirmButton: false,
                            timer: 3000
                        })
                        form.reset();
                        cargarDetalle();
                    }else if(resultado == "Modificado"){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Producto actualizado!   ',
                            showConfirmButton: false,
                            timer: 3000
                        })
                        form.reset();
                        cargarDetalle();
                    }
                }
            }  
        }
    }
}
cargarDetalle();
function cargarDetalle(){
    const url = base_url + "Compras/listar";
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
                        <button class="btn btn-danger" type="button" onclick="deleteDetalle(${row['id']})">
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
function deleteDetalle(id){
    const url = base_url + "Compras/delete/"+id;
    const form = document.getElementById("formCompra");
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
                cargarDetalle();
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
function generarCompra(){
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
            const url = base_url + "Compras/registrarCompra";
            const http = new XMLHttpRequest();
            http.open("GET", url, true);
            http.send();
            http.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){
                    const resultado = JSON.parse(this.responseText);
                    if(resultado.msg == "Ok"){
                        Swal.fire(
                            'Mensaje!',
                            'Compra generada.',
                            'success'
                        )
                        const ruta = base_url + 'Compras/generarPdf/' + resultado.id_compra;
                        window.open(ruta);
                        setTimeout(() => {
                            window.location.reload();
                        }, 300);
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