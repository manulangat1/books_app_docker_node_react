import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';


dotenv.config()

const app = express();


app.use('/', (req,res) => res.send('hello worlds'))

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Books app running in PORT ${PORT} in ${process.env.NODE_ENV} mode`.yellow.underline.bold))
