const express= require("express");

const app= express();

//people>/ people
//user/row >/people
//user/row/age >/people/user/age
//user/row/name >/people/user/name
 
let people= { people:[ { name:"jayalakshmi"}] }
app.get("/people",function(req,res){
    
 res.json( people);
 res.end();
 

})
app.post("/people",function(req,res){

    if(req.body && req.body.name){

        people.people.push({ name: req.body.name}
    }
    res.json( people);
    res.end();
    
   
   })
   app.delete("/people",function(req,res){
    
    res.json( people);
    res.end();
    
   
   })
   




app.listen(3000);
