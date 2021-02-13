const express = require('express');
const path = require('path');
const axios = require('axios');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(express.json());
app.use(express.static(PUBLIC_DIR));

const PORT = 3000 || process.env.PORT;

app.get('/api/item/:itemID', (req, res) => {
  const { itemID } = req.params;
  axios.get(`http://44.238.190.170:3003/api/item/${itemID}`)
    .then((result) => res.send(result.data));
});
app.get('/api/relatedItems/:id', (req, res) => {
  const { itemID } = req.params;
  axios.get(`http://18.219.158.74/api/relatedItems/${itemID}`)
    .then((result) => res.send(result.data));
});
app.get('/api/reviews/:id', (req, res) => {
  const { itemID } = req.params;
  axios.get(`http://100.26.8.183:3002/api/reviews/${itemID}`)
    .then((result) => res.send(result.data));
});
app.get('/api/items/:itemID', (req, res) => {
  const { itemID } = req.params;
  axios.get(`http://sdc/slconsulting.us/api/items/${itemID}`)
    .then((result) => res.send(result.data));
});

app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});
