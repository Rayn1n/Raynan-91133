// Exibe o nome do usuário
const usuario = localStorage.getItem("usuario");

if (usuario) {
    const bemVindo = document.getElementById("bemVindo");
    if (bemVindo) {
        bemVindo.textContent = `Bem-vindo, ${usuario}!`;
    }
} else {
    window.location.href = "index.html";
}

// Botão de sair
document.getElementById("logoutBtn").addEventListener("click", function () {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
});

// Atualiza o total automaticamente
document.getElementById("preco").addEventListener("input", calcularTotal);
document.getElementById("quantidade").addEventListener("input", calcularTotal);

function calcularTotal() {
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const totalField = document.getElementById("total");

    if (!isNaN(preco) && !isNaN(quantidade)) {
        totalField.value = (preco * quantidade).toFixed(2);
    } else {
        totalField.value = "";
    }
}

// Validação do formulário
document.getElementById("cadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const produto = document.getElementById("produto").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);

    let msgErro = document.getElementById("msgErro");
    if (!msgErro) {
        msgErro = document.createElement("div");
        msgErro.id = "msgErro";
        msgErro.style.color = "red";
        document.getElementById("cadastro").appendChild(msgErro);
    }

    msgErro.textContent = "";

    if (produto === "" || isNaN(preco) || isNaN(quantidade)) {
        msgErro.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    if (preco <= 0) {
        msgErro.textContent = "O preço deve ser maior que zero.";
        return;
    }

    if (quantidade <= 0) {
        msgErro.textContent = "A quantidade deve ser maior que zero.";
        return;
    }

    alert("Produto cadastrado com sucesso!");

    // Limpa os campos após cadastro
    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("total").value = "";
});
