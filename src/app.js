const  express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;

// path variable
const staticpath = path.join(__dirname,"../public");


// assigning hbs
app.set('view engine','hbs');
app.use(express.static(staticpath));


// routing 
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("/*",(req,res)=>{
    res.render("404")
})


// hosting port 
app.listen(port,()=>{
    console.log("Port is running sucessfully");
})

console.log(__dirname);
