const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello CI/CD Pipeline Working ');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
