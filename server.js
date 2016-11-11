var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Buddy = require("./models/buddy")

var app = express();

mongoose.connect("mongodb://localhost/buddyapp", function(){
	console.log("Successfully connected to Database");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res){
	res.send("Hello Buddys from Bengaluru !!!")
});

app.get("/buddy", function(req, res){
	Buddy.find(function(err, data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})

app.post("/buddy", function(req, res){
	var body = req.body;

	Buddy.create(body, function(err, data){
		if(err){
			throw err;
		}
		res.json(data);
	});
});

app.put("/buddy/:id", function(req, res){
	var id = req.params.id;
	Buddy.findOneAndUpdate({_id: id}, req.body, function(err, data){
		if(err){
			throw err;
		}
		res.json(data);
	})
});

app.delete("/buddy/:id", function(req, res){
	var id = req.params.id;
	Buddy.remove({_id: id}, function(err, data){
		if(err){
			throw err;
		}
		res.json(data);		
	});
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("Server running at port " + PORT);
})