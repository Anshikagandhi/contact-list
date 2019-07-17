//sending data from server to views
const express=require('express');
const path=require('path');
const port =8000;
const app = express();


app.set('view engine','ejs'); //setting a value for the property//stp1 
app.set('views', path.join(__dirname,'/views'));// step2
app.use(express.urlencoded());         // this is known as a middleware

var contactList=[
{
    name: "Anshika",
    phone: "1111111111"
},
{
    name: "Nitin",
    phone: "123456789"
},
{
    name: "Riya",
    phone: "345672829"
}

]
app.get('/',function(req,res){
    
    return res.render('home',
    {title:"my contacts list",
    contact_list: contactList  //creating a key

     }
    );  // step 4
}
)


app.get('/practice',function(req,res){
    return res.render('practice',{title:"Let us play with ejs"});

}
)
app.post('/create_contact',function(req,res){
    // return res.redirect('/practice'); 
     //redirect takes us to the url ..it is a controller
     contactList.push({
         name: req.body.name,
         phone: req.body.phone
     });
     return res.redirect('/');
 });

app.listen(port,function(err){
 if(err)
 {
     console.log('Error is running', err);
 }
 console.log('my server is running on port',port);
}
)