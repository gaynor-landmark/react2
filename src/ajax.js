var $ = require('jquery')
var request = require('superagent')

module.exports = function(geturl, callback) {
	console.log("in get request", geturl)
	request.get(geturl)
		.end(function(err, res){
      if (err){
        console.log(err)
      } else {
        console.log("in get request .end", res.body)
				callback(res.body)
      }
		})
  }
