
const express = require('express');
const router = express.Router();
const Donor = require('../Model/Donate');
const bcrypt = require('bcrypt');
const upload = require('../config/multerConfig');
const saltRounds = 10;


router.post('/match', async (req, res) => {
  const { bloodType, Address } = req.body;
  try {
    const matchedUsers = await Donor.find({
      bloodType,
      Address: { $regex: Address, $options: 'i' }
    });

    res.status(200).json({
      message: matchedUsers.length > 0 ? 'Match found' : 'No match found',
      user: matchedUsers.length > 0 ? matchedUsers : null
    });
  } catch (error) {
    console.error("Matching error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/register', upload.single('profileImage'), async (req, res) => {
  try {

    const checkDonor = await Donor.find({Email: req.body.Email})

    if(checkDonor.length > 0)
    {
      res.status(500).json({ message: 'Email Already Exists, Try another email.'});
    }

    const hashedPassword = await bcrypt.hash(req.body.Password, saltRounds);
    let profileImagePath = '';

    if (req.file) {     
      profileImagePath = req.file.filename;
    }

    const newDonor = new Donor({
      FullName: req.body.FullName,
      Email: req.body.Email,
      Password: hashedPassword,
      PhoneNO: req.body.PhoneNO,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      bloodType: req.body.bloodType,
      weight: req.body.weight,
      Address: req.body.Address,
      LastDonation: req.body.LastDonation,
      TotalDonation: req.body.TotalDonation,
      profileImagePath
    });

    console.log(53, newDonor)

    const savedDonor = await newDonor.save();
    res.status(200).json({ message: 'Donor registered successfully', donor: savedDonor });
  } catch (error) {
    console.error('Error registering donor:', error.message);
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});


router.post('/connect', async (req, res) => {
  const { FullName, Password } = req.body;

  try {
    const user = await Donor.findOne({ FullName });
    if (!user) return res.status(404).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const { Password: _, ...userData } = user.toObject();
    res.status(200).json({ message: 'Login successful', user: userData });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
});


router.post('/reset-password', async (req, res) => {
  const { FullName, newPassword } = req.body;

  try {
    const user = await Donor.findOne({ FullName });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.Password = await bcrypt.hash(newPassword, saltRounds);
    await user.save();
    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({ message: 'Server error', error });
  }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Donor.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

module.exports = router;