const http = require('http');

const server = http.createServer((req, res) => {
    // Define o tipo de resposta como JSON
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    // Cria o objeto de resposta
    const response = {
        message: "Hello World from Docker v1.2 + Node.js 🚀",
        datetime: new Date().toLocaleString() // dia e hora atuais formatados
    };

    // Envia o JSON
    res.end(JSON.stringify(response));
});

server.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
