const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');

app.get('/',(req,res)=>{
    const token=jwt.sign({id:587},"la1figa2ta5tia8",{expiresIn:"1d"})
    console.log(token)
    const payload=jwt.verify(token,"la1figa2ta5tia8")
    res.send(payload);
})

app.get('/login',(req,res)=>res.send('esto seria login'))

app.listen(3001,()=>console.log('servidor lenvantado'))