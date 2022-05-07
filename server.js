const express = require('express');
const cors = require('cors');
const mainRouter = require('./Routes')

const server = express();

server.use(cors());

server.use('/api', mainRouter);

server.listen(process.env.PORT || 3001, () => {
    console.log("Application is started...")
})