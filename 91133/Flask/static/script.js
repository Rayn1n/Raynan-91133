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

function carregarLista() {
    fetch('/api/listar')
    .then(res => res.json())
    .then(amigos => {
        const lista = document.getElementById('lista-amigos');
        lista.innerHTML = '';
        amigos.forEach(amigo => {
            const item = document.createElement('li');
            item.textContent = amigo.nome + ' ';
            const btn = document.createElement('button');
            btn.textContent = 'Excluir';
            btn.onclick = () => excluirAmigo(amigo.id);
            item.appendChild(btn);
            lista.appendChild(item);
        });
    });
}

window.onload = carregarLista;
