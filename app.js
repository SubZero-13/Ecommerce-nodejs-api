const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require('./routes/cartRoute');
const orderRoute = require('./routes/orderRoute');
const errorHandler = require('./middleware/errorHandler');
const limiter = require('./middleware/rateLimiter');
const swagger = require('./config/swagger');
const { orderSwaggerDoc } = require('./swagger/orderSwaggerDoc.js');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(limiter);
app.use(bodyParser.json());
app.use(cors());

const swaggerDocument = {
    paths: {
      ...orderSwaggerDoc,
    }
  };

app.use("/api/v1", userRoute)
app.use("/api/v1", categoryRoute)
app.use("/api/v1", productRoute)
app.use("/api/v1", cartRoute)
app.use("/api/v1", orderRoute)
app.use(errorHandler);

app.use('/api-docs', swagger.serve, swagger.setup);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
