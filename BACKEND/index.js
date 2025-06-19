const express = require('express');
require('dotenv').config(); 
const app = express();
const port = process.env.PORT || 3000;



app.get('/',(req,res)=>{
  res.send('Backend Working');
})


app.get('/login',(req,res2)=>{
  res2.send('<h1>Login Page</h1><p>Welcome to the login page!</p>');
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});