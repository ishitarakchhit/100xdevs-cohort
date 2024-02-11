const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://myfirstdb:myfirstdb@cluster0.awmpxyw.mongodb.net/ishita');
const User = mongoose.model('Users', { name: String, email: String, password: String});

const user = new User({ name: 'Ishita', email: "ishita@gmail.com", password: "123456" });
user.save().then(() => console.log('meow'));