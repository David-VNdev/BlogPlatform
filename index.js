import express from 'express';
const app = express();
const port = 3000
app.get('/', (req, res) => {

    var a=1;
  res.send('Hello World!');
})

app.listen(3000, () => {
  console.log(`Blog app is listening at http://localhost:${port}`);
})