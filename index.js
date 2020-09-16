const express = require('express');

cons app = express()

app.get('/teste2', (req, res) => {
  return res.json({ hello: 'world'})
});

app.listen(3333);