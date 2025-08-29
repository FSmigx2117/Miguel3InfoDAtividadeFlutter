const express = require('express');
const app = express();

const clientsRouter = require('./routes/clients');
const ordersRouter = require('./routes/orders'); // se existir

app.use(express.json());
app.use('/clients', clientsRouter);
app.use('/orders', ordersRouter); // se existir

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});