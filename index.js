const express=require('express');
const app=express();

app.use(express.json());

const cors = require('cors');
app.use(cors());


app.post("/sum",(req,res)=>{
    const a=parseInt(req.body.a);
    const b=parseInt(req.body.b);

    res.json({
        ans:a+b
    })
})

app.listen(5000);

