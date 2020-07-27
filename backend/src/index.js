const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express ();
mongoose.connect('mongodb+srv://murylo:mumf1909@cluster0-dqmz8.mongodb.net/tcc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);



app.listen(3330);