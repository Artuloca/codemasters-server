const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

const users = []; // Este es un almacenamiento de usuarios en memoria. En una aplicación real, deberías usar una base de datos.

function checkUsuarioCodeMasters(req, res, next) {
    const usuarioCodeMasters = req.get('UsuarioCodeMasters');
    if (usuarioCodeMasters) {
        console.log(`UsuarioCodeMasters: ${usuarioCodeMasters}`);
        req.logged = true;
    } else {
        req.logged = false;
    }
    next();
}

app.use(checkUsuarioCodeMasters);

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { email: req.body.email, password: hashedPassword };
    users.push(user);
    res.status(201).send();
});

app.post('/auth', async (req, res) => {
    const user = users.find(user => user.email === req.body.email);
    if (user == null) {
        return res.status(400).send('No se puede encontrar el usuario');
    }

    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken, logged: req.logged });
        } else {
            res.send('No autorizado');
        }
    } catch {
        res.status(500).send();
    }
});

app.listen(3000);