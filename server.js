const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 2. ARRAY DE DADOS
let animes = [
    {
        nome: "Naruto Shippuden",
        descricao: "Um ninja que busca se tornar Hokage.",
        imagem: "https://m.media-amazon.com/images/I/91uYvS6B9sL._AC_SL1500_.jpg"
    },
    {
        nome: "One Piece",
        descricao: "A jornada de Luffy para ser o Rei dos Piratas.",
        imagem: "https://m.media-amazon.com/images/I/81fS6Y6I9-L._AC_SL1500_.jpg"
    }
];

// 3. ROTAS
// GET - Retorna todos
app.get('/itens', (req, res) => {
    res.json(animes);
});

// POST - Adiciona novo
app.post('/itens', (req, res) => {
    const novoAnime = req.body;
    animes.push(novoAnime);
    res.status(201).json({ mensagem: "Sucesso!" });
});

// DESAFIO: Deletar item
app.delete('/itens/:nome', (req, res) => {
    const nome = req.params.nome;
    animes = animes.filter(a => a.nome !== nome);
    res.json({ mensagem: "Removido!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});