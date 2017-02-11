var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/webhook', function(request, response) {
  //response.render('pages/index');
  response.send('Hello World !!!');
});

app.get('/messages', function(request, response) {
  //response.render('pages/index');
  console.log()
  if (request.query['hub.verify_token'] === 'mybot_mybot_mybot') {
      response.send(request.query['hub.challenge']);
    } else {
      response.send('I get the messages');
    }
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


