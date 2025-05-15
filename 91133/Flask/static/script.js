function adicionarAmigo() {
    const nome = document.getElementById('nome').value;
    if (!nome) return;

    fetch('/api/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome })
    })
    .then(res => res.json())
    .then(() => {
        document.getElementById('nome').value = '';
        carregarLista();
    });
}

function excluirAmigo(id) {
    fetch(`/api/excluir/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => carregarLista());
}

function editarAmigo(id, nomeAtual) {
    const novoNome = prompt('Edite o nome do amigo:', nomeAtual);
    if (novoNome === null || novoNome.trim() === '') return;

    fetch(`/api/editar/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: novoNome })
    })
    .then(res => res.json())
    .then(() => carregarLista());
}

function carregarLista() {
    fetch('/api/listar')
    .then(res => res.json())
    .then(amigos => {
        const lista = document.getElementById('lista-amigos');
        lista.innerHTML = '';
        amigos.forEach(amigo => {
            const item = document.createElement('li');
            item.textContent = amigo.nome + ' ';


            const btnEditar = document.createElement('button');
            btnEditar.innerHTML = 'Editar';
            btnEditar.title = 'Editar';
            btnEditar.style.marginRight = '8px';
            btnEditar.onclick = () => editarAmigo(amigo.id, amigo.nome);
            item.appendChild(btnEditar);

            const btnExcluir = document.createElement('button');
            btnExcluir.innerHTML = 'Excluir';
            btnExcluir.title = 'Excluir';
            btnExcluir.onclick = () => excluirAmigo(amigo.id);
            item.appendChild(btnExcluir);

            lista.appendChild(item);
        });
    });
}

window.onload = carregarLista;
