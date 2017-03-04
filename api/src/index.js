import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// eslint-disable-next-line
import colors from 'colors';
import mongoose from 'mongoose';

// Import modules
import login from './login/login';

// Configure app
const app = express();
app.set('port', 9000);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: ['http://localhost:8100', /\.localhost:8100\.$/, 'https://forestryservices.com', /\.example2\.com$/],
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

app.listen(app.get('port'), () => {
    const id = process.pid;
    // eslint-disable-next-line
    console.log('Process '.green + id + ' running on port: '.green + app.get('port'));

    // connect to the database
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/myForestry');
    mongoose.connection.once('connected', () => {
        // eslint-disable-next-line
        console.log(id + ' connected to myForestry mongooseDB'.dim);
    });
});

// initialize modules
login(app);
