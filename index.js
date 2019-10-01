const express = require('express');
const postsRouter = require('./posts/postsRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.send('Hello from index.js')
})

server.listen(4000, () => console.log('server is running on port 4000'))