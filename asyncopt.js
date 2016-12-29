var async = require('async')

var data = []
for(var i=0; i<100; i++) {
  data.push(i)
}

console.log(data)

async.each(data, function(d, cb) {
  console.log(d)
  cb
})
