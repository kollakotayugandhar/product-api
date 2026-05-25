import { useState } from "react"

const About = () => {

  const [show, setShow] = useState(false)

  return (
    <div>

      <h1>About Page</h1>

      <p>Welcome to StyleNest fashion store</p>

      {/* BUTTON */}
      <button onClick={() => setShow(!show)}>
        Click Me
      </button>

      {/* HIDDEN CONTENT */}
      {show && (
        <div>
          <h2>More Information</h2>
          <p>We provide best fashion products for everyone.</p>
        </div>
      )}

    </div>
  )
}

export default About