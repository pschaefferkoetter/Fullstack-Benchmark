const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));


app.get('/api/posts', function(req, res) {
  Post.find()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
//fe