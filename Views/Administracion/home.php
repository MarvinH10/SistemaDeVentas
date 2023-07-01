<?php include "Views/Templates/header.php"; ?>
<div class="row">
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-primary">
            <div class="card-header card-header-primary card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-user fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Usuarios
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-primary font-weight-bold">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['usuarios']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-success">
            <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-users fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Clientes
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-success font-weight-bold">
                <a href="<?php echo base_url; ?>Clientes" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['clientes']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-danger">
            <div class="card-header card-header-danger card-header-icon">
                <div class="card-icon">
                    <i class="fab fa-product-hunt fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Productos
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-danger font-weight-bold">
                <a href="<?php echo base_url; ?>Productos" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['productos']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-warning">
            <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-cash-register fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Ventas x Día
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-warning font-weight-bold">
                <a href="<?php echo base_url; ?>Compras/historial_ventas" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['ventas']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-celeste">
            <div class="card-header card-header-celeste card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-people-arrows fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Categorias
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-celeste font-weight-bold">
                <a href="<?php echo base_url; ?>Categorias" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['categorias']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-yellow">
            <div class="card-header card-header-yellow card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-balance-scale fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Medidas
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-yellow font-weight-bold">
                <a href="<?php echo base_url; ?>Medidas" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['medidas']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-purple">
            <div class="card-header card-header-purple card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-boxes fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Cajas
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-purple font-weight-bold">
                <a href="<?php echo base_url; ?>Cajas" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['caja']['total']; ?></h3>
            </div>
        </div>
    </div>
    <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats bg-info">
            <div class="card-header card-header-info card-header-icon">
                <div class="card-icon">
                    <i class="fas fa-coins fa-2x ml-auto"></i>
                </div>
                <a class="text-white font-weight-bold">
                    Compras x Día
                </a>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between text-info font-weight-bold">
                <a href="<?php echo base_url; ?>Compras/historial" class="text-white font-weight-bold">Ver Detalle</a>
                <h3 class="card-title"><?php echo $data['compras']['total']; ?></h3>
            </div>
        </div>
    </div>
    <!--OTRO MODO SINTAXIS:
        <div class="col-xl-3 col-md-6">
        <div class="card bg-primary">
            <div class="card-body d-flex text-white">
                Usuarios
                <i class="fas fa-user fa-2x ml-auto"></i>
            </div>
            <div class="card-footer d-flex align-items-center justify-content-between">
                <a href="<?php echo base_url; ?>Usuarios" class="text-white">Ver Detalle</a>
                <span class="text-white"><?php echo $data['usuarios']['total']; ?></span>
            </div>
        </div>
    </div>
    -->
</div>
<div class="row mt-2">
    <div class="col-xl-6">
        <div class="card">
            <div style="background: linear-gradient(to bottom, #ffff99 0%, #66ccff 100%)" class="card-header text-white">
                <i class="fa-sharp fa-solid fa-chart-pie" style="color: #ffffff;"></i>
                Productos con Stock Mínimo
            </div>
            <div class="card-body">
                <canvas id="stockMinimo" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
    <div class="col-xl-6">
        <div class="card">
            <div style="background: linear-gradient(to bottom, #ffff99 0%, #ff3399 100%)" class="card-header text-white">
                <i class="fa-solid fa-circle-half-stroke"></i>
                Productos más Vendidos
            </div>
            <div class="card-body">
                <canvas id="productosVendidos" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
</div>
<?php include "Views/Templates/footer.php"; ?>