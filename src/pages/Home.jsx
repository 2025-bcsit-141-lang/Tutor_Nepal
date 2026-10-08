import "../styles/Home.css"
import React from 'react'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <>
    <div className="img-container">
    <img src="../public/hero.png" alt="" />
</div>
<Navigation />
<div className="hero-content">
    <div className="large-text">
        Better Learning.
        A Brighter future.
        {/* harek part ma we will give an limited width hai tw so we can go according to the design.remeber to provide
        that in css .also comment ther since later on we might use tailwind css for better code structure and readablity */}
    </div>
    <div className="paragraph">
        Personalized home tutoring for student
        accross Nepal, helping them build confidence 
        and master their goal and grow.
    </div>
    <button className="find">Find a Tutor</button>
</div>

</>
  )
}

export default Home