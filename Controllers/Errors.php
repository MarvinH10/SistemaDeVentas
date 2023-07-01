<?php
    class Errors extends Controller{
        function index(){
            $this->views->getView($this, 'index');
        }

        function permisos(){
            $this->views->getView($this, 'permisos');
        }
    }
?>