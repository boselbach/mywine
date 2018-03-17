import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { answer: 'hello!!' });
});

app.listen(config.port, () => {
  console.log(`Running on ${config.port}`);
});
