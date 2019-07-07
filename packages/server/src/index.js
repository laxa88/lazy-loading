const app = require('express')();

const hostname = '127.0.0.1';
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => {
  res.send('Server is online.');
});

app.get('/user', (req, res) => {
  // simulate delay to test lazy-loading logic in client
  setTimeout(() => {
    res.status(200).json({
      name: 'akira',
      email: 'hasegawa@hotmail.com',
    });
  }, 1000);
});

app.get('/invalid', (req, res) => {
  setTimeout(() => {
    res.status(502).send({
      message: 'dummy message',
    });
  }, 1000);
});

server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
