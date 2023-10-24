const hostname = 'localhost';
const port = process.env.PORT ?? 3000;
const username = process.argv[2] || 'John Doe';

const client = new WebSocket(`ws://${hostname}:${port}?username=${username}`);

client.onmessage = (event) => {
  console.log(event.data);
};

process.stdin.on('data', (message) => {
  client.send(message);
});
