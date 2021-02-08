const express= require('express');

const api =express();
// api.use((req,res,next)=>{
//     console.log('Hello');
//     next();
// });

api.use(express.static(__dirname+'/public'));

api.listen(3000, () =>{
    console.log('API up and running!');
})

// api.get('/',(req,res) => {
//     // console.log(req); 
//     res.send('Hello world!');
// });

api.post('/add',(req,res)=>{
    console.log(req.body);
    res.send('It work!');
    
})

// when the code are complete then the command the terminal node ./src/index.js
// if you add then the node index.js run the server 
// https://expressjs.com/en/guide/writing-middleware.html 