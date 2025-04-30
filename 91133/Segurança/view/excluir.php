<?php
if (!isset($_GET['id'])) {
    header("Location: listar.php");
    exit;
}

include 'conecta.php';

$id = intval($_GET['id']); // Garante que o ID seja um número inteiro

$sql = "DELETE FROM produtos WHERE id = $id"; // Corrigido: adicionado '='

if ($conn->query($sql) === TRUE) {
    echo "<script>alert('Produto excluído com sucesso!');
    window.location.href = 'listar.php';</script>";
} else {
    echo "<script>alert('Erro ao excluir o produto.');
    window.location.href = 'listar.php';</script>";
}

$conn->close();
?>
