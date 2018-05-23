const PORT = process.env.PORT || 9001;

const server = require('./server'); 

server.listen(PORT, () => {
  process.stdout.write(`Server listening on port: ${PORT}`);
})