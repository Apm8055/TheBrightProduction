import React from 'react'
import Header from '../Header/Header'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Services from '../Services/Services'
import GalleryComponent from '../GalleryComponent/GalleryComponent'
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
      <GalleryComponent />
      <Blog />
      <Instagram />
      <Footer/>
    </div>
  )
}

export default Home
