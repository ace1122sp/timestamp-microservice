const express = require('express');
const helmet = require('helmet');
const path = require('path');

const port = 9000;

const app = express();


const routeOptions = {
  root: __dirname + '/public'
};


app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile('index.html', routeOptions);
});




app.listen(port, () => {
  console.log(`Server listening at port ${port}...`);
})
