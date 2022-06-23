require('./src/db/db/mongoose');
const express = require('express');

const app = express();

console.log("helllo");
app.listen(3000, () => console.log('Server running'));