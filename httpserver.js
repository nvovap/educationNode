var http = require('http'),
	server = http.createServer(function(request, response){

		console.log(request.headers)
		console.log(request.url)

		response.writeHead(200, {
			'Content-Type' : 'text/plain'
		})

		response.write('Hello http!')

		response.end()

	})

server.listen(3000);
console.log('listening 3000 port')