const express = require('express'); 

const app = express();

app.get('/', (request, response) => response.status(200).send('Olá Mundo, sou a Patricia'));

app.listen(3333, () => console.log('Server running on port 3333'));