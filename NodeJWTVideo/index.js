import nodemon from 'nodemon'
import express from 'express'

const app = express();

app.listen(process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));



app.post('/', (req, res) => {
    console.log(req.body);
});