const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const authMiddleWare = require('./middleware/auth');
const notFoundMiddleWare = require('./middleware/notFound');


const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', require('./routes/User'));
app.use('/api/v1/products', require('./routes/Product'));
app.use('/api/v1/orders', authMiddleWare, require('./routes/Order'));
app.use('/api/v1/cart', authMiddleWare, require('./routes/Cart'));
app.use(notFoundMiddleWare);
app.use(errorHandler);
const startServer = async () => {
  try {
    console.log('Connection string:', process.env.CONNECTION_STRING);
    await connectDB(process.env.CONNECTION_STRING);
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
