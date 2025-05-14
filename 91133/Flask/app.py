from flask import Flask, request, jsonify, render_template
import sqlite3

app = Flask(__name__)

def criar_banco():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS amigos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

criar_banco()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/adicionar', methods=['POST'])
def adicionar():
    dados = request.json
    nome = dados['nome']
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO amigos (nome) VALUES (?)', (nome,))
    conn.commit()
    conn.close()
    return jsonify({'mensagem': 'Amigo adicionado com sucesso!'})


@app.route('/api/listar')
def listar():
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('SELECT id, nome FROM amigos')
    amigos = [{'id': row[0], 'nome': row[1]} for row in cursor.fetchall()]
    conn.close()
    return jsonify(amigos)

@app.route('/api/excluir/<int:id>', methods=['DELETE'])
def excluir(id):
    conn = sqlite3.connect('amigos.db')
    cursor = conn.cursor()
    cursor.execute('DELETE FROM amigos WHERE id = ?', (id,))
    conn.commit()
    conn.close()
    return jsonify({'mensagem': 'Amigo excluído com sucesso!'})

if __name__ == '__main__':
    app.run(debug=True)
