const express = require("express");
const app = express();

app.get("/", (request, response) => {
    const path = request.path;
    const content = `<h1>Home</h1>
    <p>Ruta actual: ${path}</p>
    <p>Navegación:</p>
    <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>`;
    response.send(content);
});

app.get("/about", (request, response) => {
    const path = request.path;
    const content = `<h1>About</h1>
    <p>Ruta actual: ${path}</p>
    <p>Navegación:</p>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
    <p>Página por Alesandro</p>`;
    response.send(content);
});

app.get("/contact", (request, response) => {
    const path = request.path;
    const content = `<h1>Contact</h1>
    <p>Ruta actual: ${path}</p>
    <p>Navegación:</p>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
    <p>Contacto por alesandroquirosgobbato@gmail.com</p>`;
    response.send(content);
});

app.use((request, response) => {
    const path = request.path;
    response.status(404).send(`<h1>404 Página no encontrada</h1>
    <p>Ruta actual: ${path}</p>
    <p><a href="/">Home</a></p>`);
});

app.listen(3000, () => {
    console.log("Express listening on http://localhost:3000");
});
