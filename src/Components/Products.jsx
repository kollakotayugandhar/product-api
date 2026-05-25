import { useEffect, useState } from "react"

const Products = () => {

  const [allProducts, setAllProducts] = useState([])
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])

  // FETCH PRODUCTS FROM BACKEND
  useEffect(() => {

    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setAllProducts(data))

  }, [])

  // ADD TO CART
  const addToCart = (item) => {
    setCart([...cart, item])
  }

  // WISHLIST
  const toggleWishlist = (item) => {

  if (wishlist.find(p => p._id === item._id)) {

    setWishlist(wishlist.filter(p => p._id !== item._id))

  } else {

    setWishlist([...wishlist, item])
  }
}

  // FILTER + SEARCH
  const filteredProducts = allProducts
    .filter(item =>
      filter === "All" ? true : item.category === filter
    )
    .filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )

  return (

    <div>

      {/* CART */}
      <div style={{ textAlign: "center", margin: "10px" }}>

        <h3>🛒 Cart: {cart.length}</h3>

        <h3>❤️ Wishlist: {wishlist.length}</h3>

      </div>

      {/* SEARCH */}
      <div className="search-bar">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* FILTER BUTTONS */}
      <div className="category-buttons">

        <button onClick={() => setFilter("All")}>All</button>

        <button onClick={() => setFilter("Men")}>Men</button>

        <button onClick={() => setFilter("Women")}>Women</button>

        <button onClick={() => setFilter("Beauty")}>Beauty</button>

        <button onClick={() => setFilter("Kids")}>Kids</button>

        <button onClick={() => setFilter("Accessories")}>Accessories</button>

      </div>

      {/* PRODUCTS */}
      <div className="products-container">

        {filteredProducts.map(item => (

          <div className="card" key={item._id}>

            <img src={item.image} alt={item.name} />

            <h2>{item.name}</h2>

            <p>{item.category}</p>

            <h3>₹{item.price}</h3>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>

            <button onClick={() => toggleWishlist(item)}>

              {wishlist.find(p => p.id === item.id)
                ? "❤️ Added"
                : "🤍 Wishlist"}

            </button>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Products