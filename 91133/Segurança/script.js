function validarFormulario(){
    const produto = document.getElementById("produto").value;
    const tipo = document.getElementById("tipo").value;
    const quantidade = document.getElementById("quantidade").value

    if(produto === "" || tipo === "" || quantidade ===""){
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    return true;
}
