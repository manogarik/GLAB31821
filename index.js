const express = require("express");
const path = require("path");
const app = express();
const port = 5500;
//Part 2 using middleware
//middleware to encode the url
app.use(express.urlencoded({ extended: true }));


//setting the view engine
app.set('view engine','ejs');

//routes
app.get('/',(req,res) =>
{
    res.render('welcome',({title : 'WELCOME PAGE'}));
})

app.get('/register',(req,res)=>
{
    res.render('register');
})
//post method to post data
app.post('/submit',(req,res)=>
{
    const { name, email } = req.body;
    res.send(`Hi! ${name} ! You are successfully registered`);
})
//download an image
app.get('/download',(req,res)=>
{
    const filepath =path.join(__dirname,'images','dog.jpg') ;
    res.download(filepath,(err)=>
    {
        if(err)
        {
            console.log(err);
        }
    });
})
app.listen(5500,()=>{
    console.log('Server running on http://localhost:5500 ')
});