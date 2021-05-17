import express from 'express'
 const app = express();

 
 app.use(express.static('public'));

 app.get('/news', (req, res)=>{
     res.send('Hello World')
 });

 app.listen(3000, ()=>
    console.log('example app listening on port 3000!')
 );