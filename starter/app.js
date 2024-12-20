const express = require('express');
const app = express();
const PORT = 3000;
const tasks = require('./public/routes/tasks')
const connectDB = require("./db/connect")
require('dotenv').config();

app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks', tasks)

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{console.log(`server is listening on port ${PORT}`)
});

    }
    catch(error){
        console.log(error);
    }
}

start()

