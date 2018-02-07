//JSON Formatter plagin for Chrome


var express = require('express')

app = express()


app.disable('x-powered-by')

app.get('/', function(request, response){
	response.send("Hello would!")
})


app.get('/json', function(request, response){
	response.send({
		firstName: 'John',
		lastName: 'Doe'
	})
})


server = app.listen(3000, function(){
	console.log('listen 3000 port')
})