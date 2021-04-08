const express = require("express");
const route = require("./router");



const app = express();


const PORT = 9000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api',route);

//Home Route

app.get('/',(req,res)=>{
    res.status(200);
    res.end("Routing File");
});


app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
})