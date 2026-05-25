import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate()

  return (
    <div className="home">

      <div className="hero">

        <div className="hero-text">
          <h1>Big Fashion Deals 🔥</h1>

          <p>
            Shop the latest Men, Women & Kids fashion.
          </p>

          <button onClick={() => navigate("/products")}>
            Shop Now
          </button>

        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFDgzlZivErvpo0i-VMr7hlALAY5Ar_Rumg&s"
          alt="fashion"
        />

      </div>

    </div>
  )
}

export default Home