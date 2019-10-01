const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello from index.js')
})

server.listen(4000, () => console.log('server is running on port 4000'))