const express = require('express');
const bodyParser = require('body-parser');
const RootRouter = require('./routes');
const PORT = process.env.NODE_PORT || 8001;

const app = express();
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', RootRouter);

app.listen(PORT, () => {
  console.log('Server started.');
})