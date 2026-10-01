const express = require('express');
const app = express();

app.use(express.json());

let products = [
    { ProductId: 1, ProductName: "FloorCleaner", Category: "Household", Price: "250" },
    { ProductId: 2, ProductName: "Detergent", Category: "Household", Price: "200" }
];

// GET COMMAND to read all the products
app.get('/products', (req, res) => {
    res.json(products);
});

// POST COMMAND to add a new product
app.post('/products', (req, res) => {
    const newProduct = {
        ProductId: products.length + 1,
        ProductName: req.body.ProductName,
        Category: req.body.Category,
        Price: req.body.Price
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
});

// PUT COMMAND to update product details
app.put('/products/:ProductId', (req, res) => {
    const id = parseInt(req.params.ProductId);
    const product = products.find(p => p.ProductId === id);

    if (!product) {
        return res.status(404).send("Product not Found");
    }

    product.ProductName = req.body.ProductName;
    product.Category = req.body.Category;
    product.Price = req.body.Price;

    res.json(product);
});

// DELETE COMMAND to delete a product
app.delete('/products/:ProductId', (req, res) => {
    const id = parseInt(req.params.ProductId);
    const product = products.find(p => p.ProductId === id);

    if (!product) {
        return res.status(404).send("Product not Found");
    }

    products = products.filter(p => p.ProductId !== id);

    res.send("Product Deleted Successfully");
});

// USED TO FETCH A PRODUCT OF PARTICULAR ID
app.get('/products/:ProductId', (req, res) => {
    const id = parseInt(req.params.ProductId);
    const product = products.find(p => p.ProductId === id);

    if (!product) {
        return res.status(404).send("Product not Found");
    }

    res.json(product);
});

app.listen(3000, () => {
    console.log("Server Running Successfully on Port 3000");
});