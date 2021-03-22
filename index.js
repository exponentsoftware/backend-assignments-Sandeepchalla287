const app = require('express')();
const dotenv = require('dotenv');
dotenv.config();


app.listen(3000, () => {
    console.log(`Server is listening at 3000`);
  });