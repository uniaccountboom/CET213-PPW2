var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('musicDB');

var multer = require('multer');
var upload = multer();

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var express = require('express');
var restapi = express();

restapi.use(bodyParser.json({limit: '1mb'}));
restapi.use(bodyParser.urlencoded({extended : true}));

//add a table and some album data data
// db.serialize(function() {
//     db.run("CREATE TABLE IF NOT EXISTS music (id INTEGER PRIMARY KEY AUTOINCREMENT, albumname TEXT, artist TEXT, year INT, image TEXT)");
//     db.run("DELETE FROM music");
//     db.run("INSERT INTO music (albumname, artist, year, image) VALUES (?, ?, ?, ?)",
//    "Dark Side Of The Moon","Pink Floyd", 1973, "darksideofthemoon.jpg");
//    db.run("INSERT INTO music (albumname, artist, year, image) VALUES (?, ?, ?, ?)",
//    "Pet Sounds","The Beach Boys", 1966, "petsounds.jpg");
//    db.run("INSERT INTO music (albumname, artist, year, image) VALUES (?, ?, ?, ?)",
//    "Remain In Light","Talking Heads", 1980, "remaininlight.jpg");
//    db.run("INSERT INTO music (albumname, artist, year, image) VALUES (?, ?, ?, ?)",
//    "OK Computer","Radiohead", 1997, "okcomputer.jpg");
//    db.run("INSERT INTO music (albumname, artist, year, image) VALUES (?, ?, ?, ?)",
//    "In Rainbows","Radiohead", 2007, "inrainbows.jpg");
//    });

//    db.serialize(function() {
//    db.run("CREATE TABLE IF NOT EXISTS selling (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, email TEXT, condition TEXT, description TEXT, price TEXT)");
//    db.run("DELETE FROM selling");
//    db.run("INSERT INTO selling (image, email, condition, description, price) VALUES (?, ?, ?, ?, ?)",
//    "darksideofthemoon.jpg","testmail@gmail.com", "Nearly new", "Original 1973 Pressing", "£80");
//     });

//     db.serialize(function() {
//    db.run("CREATE TABLE IF NOT EXISTS review (albumname TEXT, rating int, reviewtext TEXT)");
//    db.run("DELETE FROM review");
//    db.run("INSERT INTO review (albumname, rating, reviewtext) VALUES (?, ?, ?)",
//     "Dark Side Of The Moon", 10, "A definite classic");
//     });

    

   restapi.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//default
restapi.get('/', function(req, res){
  res.send('HELLO WORLD');
});

restapi.post('/addreview', upload.array(), function(req, res, next){
    console.log(req.body);
    db.run("INSERT INTO review (albumname, rating, reviewtext) VALUES (?,?,?)", req.body.albumname, req.body.rating,req.body.reviewtext,

     function(error){
        if (error){        
            console.err(error);        
            res.status(500);      
            } else {        
               res.status(202);
            } res.end();    
    }); 
   });

   restapi.post('/addselling', upload.array(), function(req, res, next){
    console.log(req.body);
    db.run("INSERT INTO selling (image, email, condition, description, price) VALUES (?,?,?,?,?)", req.body.image, req.body.email,req.body.condition, req.body.description, req.body.description,

     function(error){
        if (error){        
            console.err(error);        
            res.status(500);      
            } else {        
               res.status(202);
            } res.end();    
    }); 
   });
  
  
  //display all rows in the table and return as json
  restapi.get('/allmusic', function(req, res){
      db.all("select * from music", function(err, rows){
      res.json(rows);
      });
     });
     
     restapi.get('/allreview', function(req, res){
      db.all("select * from review", function(err, rows){
      res.json(rows);
      });
     });
     restapi.get('/allselling', function(req, res){
      db.all("select * from selling", function(err, rows){
      res.json(rows);
      });
     });

restapi.listen(3000);
console.log("Up and running..");
