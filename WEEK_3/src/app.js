import express from 'express';
import api from './api/index.js';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

// mock-data



// Web sivusto tarjoillaan public-kansiosta
//app.use('/sivusto', express.static('public')); // aliosoite /sivusto
// tai palvelimen juuri /
app.use(express.static('public'));

// parsii json-datan http-pyynnöstä
app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/api/v1', api);

app.use('/example/middleware', (req, res, next) => {
  console.log("Moro olen täällä");
  next();
},
(req, res, next) => {
  console.log("Olen middleware ja käsittelen dataa");
  next();
},
(req, res, next) => {
  console.log("Moikka, pääsin perille asti");
  res.send('Tiedosto upattu ja käsitelty');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export default app;