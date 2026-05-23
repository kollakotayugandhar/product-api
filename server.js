require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const Product = require("./models/Product")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
  tls: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

/* HOME ROUTE */
app.get("/", (req, res) => {
  res.send("Backend Working")
})

/* GET PRODUCTS */
app.get("/products", async (req, res) => {

  try {

    const data = await Product.find()

    res.json(data)

  } catch (error) {

    res.status(500).json({ message: error.message })
  }
})

/* CREATE PRODUCT */
app.post("/products", async (req, res) => {

  const newProduct = new Product(req.body)

  await newProduct.save()

  res.json(newProduct)
})

/* UPDATE PRODUCT */
app.put("/products/:id", async (req, res) => {

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.json(updatedProduct)
})

/* DELETE PRODUCT */
app.delete("/products/:id", async (req, res) => {

  await Product.findByIdAndDelete(req.params.id)

  res.json({ message: "Product Deleted" })
})

app.listen(5000, () => {
  console.log("Server running on 5000")
})