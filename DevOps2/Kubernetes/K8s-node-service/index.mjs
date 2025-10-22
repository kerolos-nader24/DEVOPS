import os from 'os';
import http from 'http';

const message = `Hello World, I am Pod ${os.hostname()}`;

const server = http.createServer((req, res) => {
  res.end(message);
});

server.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
