const express = require('express');
const path =require('path');
const bcrypt = require('bcrypt');
const User = require('./config');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));



app.get('/', (req, res) => {
  res.render('login');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/signup',async (req,res) => {
    const data= {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const userData = await User.insertMany(data);
    console.log(userData);
    // if(userData){
    //     res.render('login');
    // } else {
    //     res.send('Error in signing up');
    // }
});

// New user Registration
// async function registerUser(req, res) {
//     const { email, password } = req.body;
//     try {
//         // 1. Check if a user with this email already exists
//         const existingUser = await User.findOne({ email: email });
//         if (existingUser) {
//             // 2. If the user exists, send an error response instead of trying to create
//             return res.status(409).json({ message: "This email is already registered." }); 
//         }
//         // 3. If no user exists, proceed with creating the new user
//         const newUser = new User({
//             email,
//             password 
//         });
//         await newUser.save();
//         res.status(201).json({ message: "User registered successfully!" });
//     } catch (error) {
//         // Handle any other potential errors here
//         console.error("Error during user registration:", error);
//         res.status(500).json({ message: "An error occurred during registration." });
//     }
// }


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});