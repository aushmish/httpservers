const express=require('express');

const app=express();

app.get("/sum",function(req,res){

    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a+b
    })

});

app.get("/subtract",function(req,res){

    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    if(a>=b){
        res.json({
            ans:a-b
        })
    }
    else{
        res.json({
            ans:b-1
        })
    }

});

app.get("/multiply",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);
    res.json({
        ans:a*b
    })
});

app.get("/divide",function(req,res){
    const a=parseInt(req.query.a);
    const b=parseInt(req.query.b);

    res.json({
        ans:a/b
    })
});

app.listen(8000,()=>{
    console.log('Server is running on port 8000');
})