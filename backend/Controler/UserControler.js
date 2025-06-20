const express = require('express');
const router = express.Router();
const User = require('../Model/User')


router.post('/reset-password', async (req, res) => {
    const { userid, newPassword } = req.body;

    try {
        const user = await User.findOne({ userid });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        console.error("Reset error:", error);
        res.status(500).json({ message: 'Server error', error });
    }
});

router.post('/connect', async function (req, res) {
  const {  userid, password } = req.body;
  try {
    const user = await User.findOne({ userid });
    if (!user) {
      return res.status(404).json({ message: 'Invalid user ID or password' });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid user ID or password' });
    }

    
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.status(200).json({ message: 'Login successful', user: userWithoutPassword });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
});



router.post('/register', async function (req, res) {
    const  data = new User({
         "userid": req.body.userid,
         "name": req.body.name,
         "password": req.body.password,
         "contact":req.body.contact
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
        const data = await User.find();
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

        const result = await User.findByIdAndUpdate(id, updatedData, options);

        res.send(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router
