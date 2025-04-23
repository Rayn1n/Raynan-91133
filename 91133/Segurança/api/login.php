<?php
session_start();
include 'conexao.php';

if($_SERVER["REQUEST_METHOD"] === "POST"){
    $usuario = trim($_POST['usuario']);
    $senha = trim($_POST['senha']);

    if (empty($usuario) || empty($senha)){
        echo "<script>
                alert('preencha todos os campos');
                window.location.href = 'http://localhost:8081/app/index.html';
        </script>";
    }


    $stmt = $conn->prepare ("SELECT * FROM usuario WHERE usuario = ? AND senha = PASSWORD(?)");
    $stmt->bind_param("ss", $usuario, $senha);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if($resultado->num_rows === 1){
        $_SESSION['usuario'] = $usuario;
        echo "<script>
                alert('Login realizado com sucesso!');
                window.location.href = 'http://localhost:8081/app/cad.html';
                </script>";
    } else {
        echo "<script>
            alert('Usuário ou senha incorretos!');
            window.location.href = 'http://localhost:8081/app';
        </script>";
    }
    $stmt->close();
    $conn->close();
    exit;
} else{
    header("Location: http://localhost:8081/app/index.html");
    exit;
}

?>