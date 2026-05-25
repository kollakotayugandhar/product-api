const Hero = () => {
  return (
    <div className="hero">

      <h1>Fashion for Everyone</h1>

      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt=""
        style={{
          width:"550px",
          height:"170px",
          objectFit:"center"
        }}
      />

      <p>
        Discover the latest trends in fashion and shop your favorite styles.
      </p>

      <button>Shop Now</button>

    </div>
  )
}

export default Hero