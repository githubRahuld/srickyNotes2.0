const express = require("express")
const path = require("path");
const hbs = require("hbs");
const bodyparser = require("body-parser")
const app = express();
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


//to get user data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);


app.get("/", async (req,res)=>{
  res.status(200).render('index');
})

////start the server
app.listen(port, ()=>{
    console.log(`The appication started successfully on port ${port}`);
});