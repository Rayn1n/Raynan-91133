<?php
include 'conecta.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
  <title>Controle de Estoque</title>
</head>
<body>
  <h1>Controle de estoque</h1>

  <?php
  $sql = "SELECT * FROM produtos ORDER BY id DESC";
  $resultado = $conn->query($sql);

  if ($resultado->num_rows > 0): ?>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <?php while ($linha = $resultado->fetch_assoc()): ?>
          <tr>
            <td><?= $linha['id'] ?></td>
            <td><?= htmlspecialchars($linha['produto']) ?></td>
            <td><?= htmlspecialchars($linha['tipo']) ?></td>
            <td><?= htmlspecialchars($linha['quantidade']) ?></td>
            <td>
              <a
                href="editar.php?id=<?= $linha['id'] ?>"
                title="Editar"
              >
                <i class="fas fa-edit" style="color:blue;"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="excluir.php?id=<?= $linha['id'] ?>"
                title="Excluir"
                onclick="return confirm('Deseja realmente excluir este produto?');"
              >
                <i class="fas fa-trash-alt" style="color:red;"></i>
              </a>
            </td>
          </tr>
        <?php endwhile; ?>
      </tbody>
    </table>
  <?php else: ?>
    <p>Nenhum produto cadastrado.</p>
  <?php
  endif;

  $conn->close();
  ?>

  <div class="btn-voltar">
    <a href="http://localhost:8081/app/cad.html">
      <button>Voltar ao cadastro</button>
    </a>
  </div>
</body>
</html>
