<?php include "Views/Templates/header.php"; ?>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Cajas</li>
    </ol>
    <button class="btn btn-outline-primary mb-2" type="button" onclick="formCaja();"><i class="fas fa-plus"></i></button>
    <table class="table table-light" id="tblCajas">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Caja</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <div id="nuevo_caja" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="titulo">Nueva Caja</h5>
                    <button class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" id="formCaja">
                        <div class="form-group">    
                            <label for="caja">Caja</label>
                            <input type="hidden" id="id" name="id">
                            <input id="caja" class="form-control" type="text" name="caja" placeholder="Caja">
                        </div>
                        <button class="btn btn-primary" type="button" onclick="registrarBox(event);" id="btnAccion">Registrar</button>
                        <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php include "Views/Templates/footer.php"; ?>