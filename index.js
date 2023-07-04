import express from 'express';
import router from './routes/index.js';
import { fileURLToPath } from 'url';
import path,{ dirname } from 'path';
import session from 'express-session';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(session({
    secret:'kongking',
    resave:false,
    saveUninitialized:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(router);

app.listen(5000,async()=>{

    console.log('app running ...');
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/bocah',{ 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('db connected!');
    }catch(err){
        return console.log(err);
    }

});