require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.database_url;
const cors = require('cors');
const path = require('path'); 
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.use(cors({
    origin:"*"
   }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const usercontroller = require('./Controler/UserControler')
app.use('/User',usercontroller)

const Donatercontroller = require('./Controler/DonateControler')
app.use('/Donate',Donatercontroller)

const Contactcontroller = require('./Controler/contactcontroler')
app.use('/Contact',Contactcontroller)


app.get('/', function (req, res) {
    res.send("This is Home Page....!!!")
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
}) 