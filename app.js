const express = require('express');
const debug = require('debug')('app');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('combined'))

app.get("/", (req,res) =>{

    res.send('Hello YUTA');
})

app.listen(port, ()=>{
    debug("Listening on port" + port);
})