//! db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./cadastro.db');

//! Cria a tabela se não existir, agora incluindo o campo "nome"
db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS pessoas (
        id   INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT
      )
    `);
});

module.exports = db;
