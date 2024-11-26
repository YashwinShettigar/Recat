const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const User = require('./models/User');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb' }));

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});

mongoose.connect('mongodb://127.0.0.1:27017/Register', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;

db.on('connected', () => {
  console.log("MongoDB connected");
});

db.on('error', (e) => {
  console.log("MongoDB connection error:" + e);
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err });
  }
});


app.post ('/login', (req,res)=>{
  return res.status(400).json({ message: 'Connecting user' });
})