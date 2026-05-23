const mongoose = require("mongoose")
const Product = require("./models/Product");


require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

const products = [
  { id: 1, name: "Nike Shoes", category: "Men", price: 5000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
  { id: 2, name: "Smart Watch", category: "Accessories", price: 3000, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49" },
  { id: 3, name: "Women Dress", category: "Women", price: 2500, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c" },
  { id: 4, name: "Perfume", category: "Beauty", price: 1500, image: "https://images.unsplash.com/photo-1541643600914-78b084683601" },
  { id: 5, name: "Kids Wear", category: "Kids", price: 1800, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea" },
  { id: 6, name: "Hoodie", category: "Men", price: 2200, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7" },
  { id: 7, name: "Heels", category: "Women", price: 3500, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2" },
  { id: 8, name: "Sunglasses", category: "Accessories", price: 1200, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083" },
  { id: 9, name: "Lipstick", category: "Beauty", price: 700, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa" },
  { id: 10, name: "Jacket", category: "Men", price: 4500, image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234" },
  { id: 11, name: "Sneakers", category: "Men", price: 3200, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb" },
  { id: 12, name: "Handbag", category: "Women", price: 2800, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
  { id: 13, name: "Makeup Kit", category: "Beauty", price: 2000, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348" },
  { id: 14, name: "Kids Shoes", category: "Kids", price: 1500, image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6" }
]

const insertData = async () => {
  await Product.deleteMany()
  await Product.insertMany(products)
  console.log("14 Products inserted successfully")
  mongoose.connection.close()
}

insertData()
