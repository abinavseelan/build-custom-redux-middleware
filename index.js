const express = require('express');
const app = express();
const port = 1337;

app.use('/', express.static('./client'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
