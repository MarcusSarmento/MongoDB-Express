import nodemon from 'nodemon'
import express from 'express'
import mongoose, { Schema } from ‘mongoose’;

const app = express();

const userSchema = new Schema({

    username: { type: String, required: true, index: { unique: true } }

}); 

const User = mongoose.model('user', userSchema);


mongoose.connect('mongodb://user:pass@ds237979.mlab.com:37979/node_express_jwt_test');

app.listen(process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!');
}); app.get('/users', (req, res) => {

    User.find({}, function (err, users) {

        return res.send(users);

    })

});

app.post('/', (req, res) => {

    const { username } = req.body;

    const newUser = new User({

        username: username

    });

    newUser.save(function (err, model) {

        return res.send(model);

    });

});