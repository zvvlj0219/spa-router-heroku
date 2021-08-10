const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// const sample = require('./routes/v1/api/sample');
// app.use('/v1/api/sample',sample);

//handle production
// if(process.env.NODE_ENV === 'produnction'){
// }

//static folder
app.use(express.static(__dirname + '/public'));

//handle spa
app.get('/',(req,res)=>res.sendFile(__dirname + 'public/index.html'));
// app.get('/',(req,res)=>{
//   res.send('hello');
// })

// server 
app.listen(port,()=>{
  console.log('server active port 5000 ')
})


