const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Starts server and listens for traffic
const onRequest = (request, response) => {
  console.log(request.url);

  // Handles different URLs
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      mediaHandler.loadMedia('bling.mp3', 'audio/mpeg', request, response);
      break;
    case '/page3':
      mediaHandler.loadMedia('bird.mp4', 'video/mp4', request, response); 
      break;
    case '/party.mp4':
      mediaHandler.loadMedia('party.mp4', 'video/mp4', request, response);
      break;
    case '/bird.mp4':
      mediaHandler.loadMedia('bird.mp4', 'video/mp4', request, response);
      break;
    case '/bling.mp3':
      mediaHandler.loadMedia('bling.mp3', 'audio/mpeg', request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
