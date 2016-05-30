var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/test', function (req, res) {
	res.status(200); 
	res.send('This is the test page...')
});

app.listen(8080);
console.log('Server Running...');