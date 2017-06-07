var express = require('express'),
    bodyParser = require('body-parser'),
    massive = require("massive");

var db = massive.connectSync({
    connectionString: 'postgres://postgres:Flipper69@localhost/WeridAl-clone'
});

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../App'))

var port = 3000;


app.get("/api/shirts", function(req, res){
    db.get_all_shirts(function(err, shirts) {
        res.send(shirts);
    });
});


app.listen(port, function() {
    console.log('listening on port' + port);
})