const  express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;

// path variable
const staticpath = path.join(__dirname,"../public");
const temp_path = path.join(__dirname,"./templates/views")
const partial_path = path.join(__dirname,"./templates/partials")
//1 assigning hbs
app.set('view engine','hbs');
app.set('views',temp_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticpath));


// routing 
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/index",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404")
})


// hosting port 
app.listen(port,()=>{
    console.log("Port is running sucessfully");
})

console.log(__dirname);
