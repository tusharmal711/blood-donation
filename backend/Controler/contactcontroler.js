const express = require('express');
const router = express.Router();
const Contact = require('../Model/Contact');

router.post('/register', async function (req, res) {
    const  data = new Contact({
         "fullname": req.body.fullname,
         "phoneno": req.body.phoneno,
         "email":req.body.email,
         "inquiryType":req.body.inquiryType,
         "subject":req.body.subject,
         "message":req.body.message
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.get('/getAll', async (req, res) => {
    try{
        const data = await Contact.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
router.patch('/update/:id',  async function (req, res) {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Contact.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Contact.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router
