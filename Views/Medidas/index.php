<?php include "Views/Templates/header.php"; ?>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Medidas</li>
    </ol>
    <button class="btn btn-outline-primary mb-2" type="button" onclick="formMedida();"><i class="fas fa-plus"></i></button>
    <table class="table table-light" id="tblMedidas">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Nombre Corto</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <div id="nuevo_medida" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="titulo">Nueva Medida</h5>
                    <button class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" id="formMedida">
                        <div class="form-group">    
                            <label for="nombre">Nombre</label>
                            <input type="hidden" id="id" name="id">
                            <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre">
                        </div>
                        <div class="form-group">    
                            <label for="nombre_corto">Nombre Corto</label>
                            <input id="nombre_corto" class="form-control" type="text" name="nombre_corto" placeholder="Nombre Corto">
                        </div>
                        <button class="btn btn-primary" type="button" onclick="registrarMedid(event);" id="btnAccion">Registrar</button>
                        <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php include "Views/Templates/footer.php"; ?>