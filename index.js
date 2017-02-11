var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


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
  console.log();
  response.send('I get the messages');
  
});

app.post('/post/messages', function(request, response) {
  //response.render('pages/index');
  console.log("Testing.............");
  console.log(request.body);
  response.set('Content-type', 'application/json');
  response.send(JSON.stringify({
      speech: "Hey, how can I help you",
      displayText: "Hey, how can I help you"
    }
  ));
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


