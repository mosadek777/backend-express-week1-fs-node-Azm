const express = require("express");
const app = express();
const port = 3000;

const userRoutes = require("./modules/user/user.routes");
const productRoutes = require("./modules/product/product.routes");
app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
