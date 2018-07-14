const express = require('express');
const app = express();
const path = require('path');
const connection = require('./connection');
const events = require('./rest-api/event-api');
var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/event-app'));
app.listen(process.env.PORT || 8080);


app.get("/events*", function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/event-app/index.html'));
});

app.get("/users*", function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/event-app/index.html'));
});

app.get('/services/events', function (req, res, next) {

    events.getAllEvents(function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});


app.get('/services/user/login/:id?/:password?', function (req, res, next) {

    events.login(req.params.id,req.params.password,function (err, rows) {

        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }

    });
});

app.post('/services/user/profile/save',function(req, res, next){

    console.log("***************");
    console.log(req.body);
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userId =  req.body.userId;

    events.saveUser(firstName,lastName,userId,function(err, rows){
            
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});