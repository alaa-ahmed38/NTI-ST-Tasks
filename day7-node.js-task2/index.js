const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
let posts = JSON.parse(data);

const getposts = (req, res) => {
  res.status(200).json(posts);
};

const getpostbyid = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);
  res.status(200).json(post);
};

const createpost = (req, res) => {
  const newpost = {
    userId: req.body.userId,
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    body: req.body.body
  };
  posts.push(newpost);
  res.status(201).json(newpost);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
};

const modifypost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  posts[index] = {
    id: id,
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body
  };
  res.status(200).json(posts[index]);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
};

const deletepost = (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter(p => p.id !== id);
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(200).json({ message: 'Post deleted successfully' });
};

const patchpost = (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }

  posts[index] = { ...posts[index], ...req.body };
  fs.writeFileSync('./data.json', JSON.stringify(posts, null, 2), 'utf-8');
  res.status(200).json(posts[index]);
};

app.route('/posts')
  .get(getposts)
  .post(createpost);

app.route('/posts/:id')
  .get(getpostbyid)
  .put(modifypost)
  .patch(patchpost)
  .delete(deletepost);

//listen server
const port = 8000;
app.listen(port, () => {
  console.log("server listen");
});
