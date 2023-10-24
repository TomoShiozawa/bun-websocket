const server = Bun.serve<{ username: string }>({
  port: process.env.PORT ?? 3000,
  fetch(request, server) {
    const success = server.upgrade(request, {
      data: { username: new URL(request.url).searchParams.get('username') },
    });

    return success
      ? undefined
      : new Response('upgrade failed', { status: 400 });
  },

  websocket: {
    open(ws) {
      ws.subscribe('chatroom');
      setTimeout(() => {
        ws.send(`Welcome ${ws.data.username}`);
      }, 10);
    },
    message(ws, message) {
      const text = `${ws.data.username}: ${message.toString().trim()}`;
      ws.publishText('chatroom', text);
    },
  },
});

console.log(`Server is listening on ${server.hostname}:${server.port}`);
