import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./Components/Products"
import Footer from "./Components/Footer"

function Layout() {

  const location = useLocation()

  return (
    <>
      {/* 👇 Navbar ONLY show on Home & About */}
      {location.pathname !== "/products" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App