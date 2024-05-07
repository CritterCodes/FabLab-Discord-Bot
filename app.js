import express from 'express';
import { db } from './lib/database.js'
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

const config = {
    url: 'mongodb://localhost:27017/',
    database: 'FabLab',
    minpoolsize: '1',
    maxpoolsize: '3'
}

db.init(config);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})