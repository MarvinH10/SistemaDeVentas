function formLogin(e){
    e.preventDefault();
    const usuario = document.getElementById("usuario");
    const clave = document.getElementById("clave");

    if(usuario.value == ""){
        clave.classList.remove("is-invalid");    
        usuario.classList.add("is-invalid");
        usuario.focus();
        swal("Oops", "Por favor, ingresa el usuario", "warning");
    }else if(clave.value == ""){
        usuario.classList.remove("is-invalid");
        clave.classList.add("is-invalid");
        clave.focus();
        swal("Oops", "Por favor, ingresa la contraseña", "warning");
    }else{
        const url = base_url + "Usuarios/validar";
        const form = document.getElementById("formLogin");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(form));
        http.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                const res = JSON.parse(this.responseText);
                if(res == "Ok"){
                    window.location = base_url + "Administracion/home";
                }else{
                    alertas(res.mensaje, res.icono);
                }
            }
        }
    }
}
function alertas(mensaje, icono){
    swal({
        position: 'top-end',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 3000
    })
}
