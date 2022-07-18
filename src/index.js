const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route=require("./router/route")
const bodyParser = require('body-parser');


app.use(bodyParser.json());


mongoose.connect("mongodb+srv://sharmaji232001:bhuvi844964@cluster0.a2txi.mongodb.net/urlShortnerGroupX", { useNewUrlParser: true })
    .then(() => console.log("mongoDB is Connected!!!"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT||3000, function() {
    console.log('Express app running on port: ' ,process.env.PORT||3000)
});