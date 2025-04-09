document.getElementById("cadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const produto = document.getElementById("produto").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const totalInput = document.getElementById("total");

   
    if (!produto || !(preco) || !(quantidade)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (quantidade < 1) {
        alert("Deve haver ao menos um produto para ser cadastrado.");
        return;
    }

    
    const total = preco * quantidade;
    totalInput.value = total.toFixed(2).replace('.', ',');
});


document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
});
