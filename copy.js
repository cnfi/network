var fs = require('fs');

var rs = fs.createReadStream('/Users/cnfi/Music/周杰伦2007世界巡回演唱会.avi');
var ws = fs.createWriteStream('/Users/cnfi/Movies/周杰伦演唱会.avi');

rs.pipe(ws);