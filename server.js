const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();



const Port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MongoURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true}).then(()=>console.log('database connected')).catch((err)=>console.log(err))

// 



app.get('/', (req, res) => {
    res.send('hello')
})

    



const userRouter = require('./routes/userAuth')
const reviewRouter = require('./routes/review')
const animeRouter = require('./routes/animes')


app.use('/api',userRouter)
app.use('/api',reviewRouter)
app.use('/api',animeRouter)


app.listen(Port,()=>{console.log('listening on 8000')})



