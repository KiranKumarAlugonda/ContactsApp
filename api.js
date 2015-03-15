//restful api using express connected to database, the ngresourse is used to fetch data from database using this api 
var express    = require('express'),
    Bourne     = require('bourne'),//Bourne is a package for local db
    bodyParser = require('body-parser'),//to parser the body for http requests
    //creating a db which is a local file
    db         = new Bourne('data.json');
    router     = express.Router();//insiating router

router  
   .use(function(req,res,next){          //middleware for router
    if(!req.user) req.user = {id:1};     //authentication
    next();
})
    .use(bodyParser.json())  
    //getting data from db 
    .route('/contact')
        .get(function(req,res){
           db.find({userId: parseInt(req.user.id,10)}, function(err,data){ 
               res.json(data);
             }) ;   
        })
     .post(function(req,res){  //creating a new contact request
          var contact = req.body;
          contact.userId = req.user.id;
          db.insert(contact,function(err,data){
          res.json(data);
          });
       });

//when we are accesing using the id
router 
    .param('id',function(req,res,next){
        req.dbQuery = {id:parseInt(req.params.id,10) }//request object to query the db
    })
     //getting data from db
     .route('contact/:id')
       .get(function(req,res){
          db.findOne(req.dbQuery,function(err,data){
          res.json(data);
        });
      })
      //updating data 
     .put(function(req,res){
          var contact = req.body;
          delete contact.$promise;
          delete contact.$reolved;
          db.update(req.dbQuery,contact,function(err,data){
             res.json([0]);
          });  
     })
     //delete data
     .delete(function(req,res){
       db.delete(req.dbQuery,function(){
           res.json(null);
        });
     });

module.exports = router;