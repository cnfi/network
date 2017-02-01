var ping = require('ping');
var fs = require('fs');

fs.readFile('./urls.text', 'utf-8', function(err, data){
	if(err){
		console.error(err)
	}else{
		var hosts = data.split('\n')

		hosts.forEach(function (host) {
		    ping.promise.probe(host)
		        .then(function (res) {
		            console.log(res.host+ ' ' + res.time + 'ms' );
		        });
		});
	}
})

console.log('ping 开始 =======>>>>')