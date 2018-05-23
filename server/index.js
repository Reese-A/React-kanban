const PORT = process.env.PORT || 3000;

const server = require('./server'); 

server.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
})