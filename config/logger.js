var commons = require('cw-commons')
var config = require(__dirname + '/index.js')
var appDir = config.appDir

module.exports.init = function() {
    var loggerOptions = {
        transports:{
            file:{
                filename:appDir+'/log/dev.log'
            }
        }
    }
    module.exports.loggerObj = commons.getLogger(loggerOptions)
}
