const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 1337;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/', express.static('./client'));

app.post('/log-error', (req, res) => {
  res.send('logged error');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
