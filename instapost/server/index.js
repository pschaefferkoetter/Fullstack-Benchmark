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

app.patch('/api/posts/:postId', function(req, res) {
  Post.findByIdAndUpdate(req.params.postId, req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});

app.post('/api/posts/', function(req, res) {
  console.log(req.body.data);
  let newPost = new Post(req.body.data);
  newPost.save()
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err));
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


// console.log(req.body);
// Post.findByIdAndUpdate(req.params.id, {likes: 5})
//   .then(()=>res.sendStatus(201))
//   .catch(err => res.status(500).send(err));