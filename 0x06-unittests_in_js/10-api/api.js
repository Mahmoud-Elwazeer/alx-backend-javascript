const express = require('express')

app = express();
port = 7865;

app.use(express.json());

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

app.get('/available_payments', (_, res) => {
  res.json(
    {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    }
  );
})

app.post('/login', (req, res) => {
  let username = '';
  if (req.body) {
    username = req.body.userName;
  }
  res.send(`Welcome ${username}`);
})

app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
