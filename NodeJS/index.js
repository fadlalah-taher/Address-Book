require("dotenv").config();
require('./src/db/mongoose');

const express = require('express');
const cors = require('cors');
const userRouter = require('./src/index');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', userRouter);

app.listen(3000, () => console.log('Server running'));