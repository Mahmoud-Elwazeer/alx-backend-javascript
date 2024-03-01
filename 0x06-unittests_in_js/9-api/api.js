const express = require('express')

app = express();
port = 7865;

app.get('/', (_, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = req.params.id
    if (!/^\d+$/.test(id)) {
        res.status(404)
    }
    res.send(`Payment methods for cart ${id}`);
})

app.listen(port, () => {
    console.log('API available on localhost port 7865');
});

module.exports = app;
