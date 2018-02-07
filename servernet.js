var net = require('net')


// var Readable = require('stream').Readable, 
// 	stream = new Readable(),
// 	data = ('В оный день, когда над миром новым Бог склонял лицо свое, тогда Солнце останавливали словом, Словом разрушали города. И орел не взмахивал крылами, Звезды жались в ужасе к луне, Если, точно розовое пламя, Слово проплывало в вышине. А для низкой жизни были числа, Как домашний, подъяремный скот, Потому что все оттенки смысла Умное число передает. Патриарх седой, себе под руку Покоривший и добро и зло, Не решаясь обратиться к звуку, Тростью на песке чертил число. Но забыли мы, что осиянно Только слово средь земных тревог, И в Евангелии от Иоанна Сказано, что Слово это — Бог. Мы ему поставили пределом Скудные пределы естества. И, как пчелы в улье опустелом, Дурно пахнут мертвые слова.').split(' ')


// stream._read = function() {
// 	if (data.length) {
// 		setTimeout(function() {
// 			stream.push(data.shift() + ' ')
// 		}, 200)
// 	} else {
// 		stream.push(null)
// 	}
	
// }

//stream.pipe(process.stdout)


//console.log(data)

var server = net.createServer(function(socket){

	console.log(socket.remoteAddress)
	console.log(socket.remotePort)


	socket.on('data', function(data){
		console.log(data)

		socket.write(String(data).toUpperCase() +  ' (' + String(data).length + ') ')
	})

	socket.on('close', function(){
		console.log('Connection close!')
	})

})

server.listen(8000)
console.log('Listening on port 8000')


//console.log(net.Socket.prototype)