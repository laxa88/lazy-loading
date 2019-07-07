const app = require('express')();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Server is online.');
});

app.get('/user', (req, res) => {
  res.json({
    name: 'akira',
    email: 'hasegawa@hotmail.com'
  });
});

server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
