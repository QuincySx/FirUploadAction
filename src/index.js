
var needle = require('needle');


needle('post', 'http://api.bq04.com/apps', { "type": "android", "bundle_id": "com.smallraw.foretime.app", "api_token": "xxxx" }, { json: true })
    .then(function (response) {
        console.log(response.body)
    })
    .catch(function (err) {
        console.error(err)
    })