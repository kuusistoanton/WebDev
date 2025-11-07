import express from 'express';
const hostname = '127.0.0.1';
const port = 3000;
const app = express();

// mock-data

const cats = [
  {
    cat_id: 2,
    name: 'Kisu',
    birthdate: '2023-10-08',
    weight: 6,
    owner: 'Hessu',
    image: 'https://loremflickr.com/320/240/cat',
  },
  {
    cat_id: 3,
    name: 'Misu',
    birthdate: '2021-11-18',
    weight: 7,
    owner: 'Hessu',
    image: 'https://loremflickr.com/320/240/cat3',
  },
];


app.use(express.static('public'));

app.use(express.json());


app.get('/api/v1', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/test', (request, response) => {
  const responseData = {vastaus: 'toimii myös näin'};
  response.send(responseData);
});


app.get('/api/v1/cats', (req, res) => {
  res.json(cats);
});

app.get('/api/v1/cats/:id', (req, res) => {

  const cat = cats.find(cat => cat.cat_id === parseInt(req.params.id));
  if (cat) {
    res.json(cat);
  } else {
    res.status(404).json({message: 'cat not found'});
  }
});

app.post('/api/v1/cats', (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
