const mongoose = require('mongoose');
const connect= mongoose.connect('mongodb://localhost:27017/Authentication')

connect.then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', schema);
module.exports = User;