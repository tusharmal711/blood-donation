const express = require('express');
const router = express.Router();
const Request = require('../Model/Request')

router.post('/register', async function (req, res) {
    const  data = new Request({
         "Bloodtype": req.body.Bloodtype,
         "location": req.body.location
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
        const data = await Request.find();
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

        const result = await Request.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Request.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router
