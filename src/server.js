const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  fs.readFile(
    path.join(__dirname, '../dist/index.html'),
    'utf8',
    (err, text) => {
      res.send(text);
    }
  );
});
app.use('*/dist', express.static(path.join(__dirname, '../dist')));

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), () => {
  console.log('listening on port: ', server.address().port);
});
