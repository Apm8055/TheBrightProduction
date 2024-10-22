import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import Gallery from '../Gallery/Gallery'
import Footer from '../Footer/Footer'
import Instagram from '../Instagram/Instagram'
import Blog from '../Blog/Blog'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      <Portfolio/>
      <Services />
      <Gallery />
      <Blog />
      <Instagram />
      <Footer/>
    </div>
  )
}

export default Home
