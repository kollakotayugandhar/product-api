import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">

      {/* BRAND NAME */}
      <h1>StyleNest</h1>

      {/* MENU */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Beauty</li>
      </ul>

      {/* SEARCH */}
      <input type="text" placeholder="Search products..." />

    </div>
  )
}

export default Navbar

