const express = require("express");

const app = express();
app.listen(3000, () => console.log(`Running At http://localhost:3000`));
app.use(express.json());

app.get("/products/values", async (request, response) => {
  const products = request.body;
  console.log(products.length);
  if (Array.isArray(products) && products.length > 0) {
    let productsValue = 0;

    products.forEach((eachProduct) => {
      if (eachProduct.price < 0) {
        return res.status(400).json({
          error: "Invalid Product Price, Price Must be Positive Number.",
        });
      } else {
        productsValue += eachProduct.price;
      }
    });
    response.status(200).json({ productsValue });
  } else {
    return response
      .status(400)
      .json({ error: "Invalid input. Please provide a list of products." });
  }
});
