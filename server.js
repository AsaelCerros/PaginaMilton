const express = require("express");
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');


app.use(express.json());

// Conexion
const sequelize = new Sequelize('webapp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

app.use(express.static('client'));

app.get('/', (req,res) => {
    res.sendFile(path.join(`${__dirname}/client/index.html`));
});

app.get('/ejes', async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa');
        const [result, metadata] = await sequelize.query("SELECT * FROM ejes");
        return res.json(result);
    } catch (error) {
        console.error('Hubo un error: ', error);
    }
});


const puerto = process.env.PORT || 3000;

app.listen(puerto,() => console.log(`Servidor en el puerto: ${puerto}`));