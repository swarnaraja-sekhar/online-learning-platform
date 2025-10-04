const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET, {expiresIn:'30d'});

const registerUser = async (req,res) => {
  const {name,email,password,role} = req.body;
  const userExists = await User.findOne({email});
  if(userExists) return res.status(400).json({message:"User exists"});
  const user = await User.create({name,email,password,role});
  res.status(201).json({
    id:user._id,
    name:user.name,
    email:user.email,
    role:user.role,
    token: generateToken(user._id)
  });
};

const loginUser = async(req,res) => {
  const {email,password} = req.body;
  const user = await User.findOne({email});
  if(user && await user.matchPassword(password)){
    res.json({
      id:user._id,
      name:user.name,
      email:user.email,
      role:user.role,
      token: generateToken(user._id)
    });
  } else res.status(401).json({message:"Invalid credentials"});
};

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, getAllUsers };
