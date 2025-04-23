<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST'){
    header("Location: http://localhost:8081/app/index.html");
    exit;
}

$host = "localhost";
$usuario = "root";
$senha = "";
$banco = "estoque";

$conn = new mysqli($host, $usuario, $senha, $banco);


if ($conn -> connect_error){
    die("Erro na conexão: " . $conn -> connect_error);
}


?>