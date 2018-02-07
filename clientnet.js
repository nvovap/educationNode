// stream node servernet.js | node clientnet.js


// var Transform = require('stream').Transform, 
// 	tr = new Transform;


// tr._transform = function(chunk, enc, cb) {
// 	var string = String(chunk)
// 	//tr.push(string + '(' + string.length + ')  ')
// 	// or
// 	this.push(string + '(' + string.length + ')  ')

// 	cb()
// }


// process.stdin.pipe(tr).pipe(process.stdout);




var Readable = require('stream').Readable, 
	stream = new Readable(),
	data = ('В оный день, когда над миром новым Бог склонял лицо свое, тогда Солнце останавливали словом, Словом разрушали города. И орел не взмахивал крылами, Звезды жались в ужасе к луне, Если, точно розовое пламя, Слово проплывало в вышине. А для низкой жизни были числа, Как домашний, подъяремный скот, Потому что все оттенки смысла Умное число передает. Патриарх седой, себе под руку Покоривший и добро и зло, Не решаясь обратиться к звуку, Тростью на песке чертил число. Но забыли мы, что осиянно Только слово средь земных тревог, И в Евангелии от Иоанна Сказано, что Слово это — Бог. Мы ему поставили пределом Скудные пределы естества. И, как пчелы в улье опустелом, Дурно пахнут мертвые слова.').split(' ')


stream._read = function() {
	if (data.length) {
		setTimeout(function() {
			stream.push(data.shift() + ' ')
		}, 200)
	} else {
		stream.push(null)
	}
	
}


var net = require('net');

var client = new net.Socket();
client.connect(8000, '127.0.0.1', function() {
	console.log('Connected');
	//client.write('Hello, server! Love, Client.');

	stream.pipe(this)



});

client.on('data', function(data) {
	console.log('Received: ' + data);
//	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
	client.destroy(); 
});