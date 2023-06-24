<?php include "Views/Templates/header.php"; ?>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Productos</li>
    </ol>
    <button class="btn btn-outline-primary mb-2" type="button" onclick="formProducto();"><i class="fas fa-plus"></i></button>
    <div class="table-responsive">
    <table class="table table-light" id="tblProductos">
        <thead class="thead-dark">
            <tr>
                <th>Id</th>
                <th>Imagen</th>
                <th>Código</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    </div>
    <div id="nuevo_producto" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="my-modal-title" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-white" id="titulo">Nuevo Producto</h5>
                    <button class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form method="post" id="formProducto">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">    
                                    <label for="codigo">Código de Barras</label>
                                    <input type="hidden" id="id" name="id">
                                    <input id="codigo" class="form-control" type="text" name="codigo" placeholder="Código de Barras">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="nombre">Descripción</label>
                                    <input id="nombre" class="form-control" type="text" name="nombre" placeholder="Nombre del Producto">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="precio_compra">Precio Compra</label>
                                    <input id="precio_compra" class="form-control" type="text" name="precio_compra" placeholder="Precio Compra"> 
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="precio_venta">Precio Venta</label>
                                    <input id="precio_venta" class="form-control" type="text" name="precio_venta" placeholder="Precio Venta"> 
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="medida">Medidas</label>
                                    <select id="medida" class="form-control" name="medida">
                                        <?php 
                                            foreach($data['medidas'] as $row){
                                        ?>
                                        <option value="<?php echo $row['id']; ?>"><?php echo $row['nombre']; ?></option>
                                        <?php
                                            }
                                        ?>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="categoria">Categorias</label>
                                    <select id="categoria" class="form-control" name="categoria">
                                        <?php 
                                            foreach($data['categorias'] as $row){
                                        ?>
                                        <option value="<?php echo $row['id']; ?>"><?php echo $row['nombre']; ?></option>
                                        <?php
                                            }
                                        ?>
                                    </select>
                                </div>
                            </div>  
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Foto</label>
                                    <div class="card border-primary">
                                        <div class="card-body">
                                            <label for="imagen" id="icon-image" class="btn btn-primary"><i class="fas fa-image"></i></label>
                                            <span id="icon-cerrar"></span>
                                            <input id="imagen" class="d-none" type="file" name="imagen" onchange="preview(event)"><br>
                                            <input type="hidden" id="foto_actual" name="foto_actual">
                                            <img class="img-thumbnail" id="img-preview">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary" type="button" onclick="registrarProduct(event);" id="btnAccion">Registrar</button>
                        <button class="btn btn-danger" type="button" data-dismiss="modal">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php include "Views/Templates/footer.php"; ?>