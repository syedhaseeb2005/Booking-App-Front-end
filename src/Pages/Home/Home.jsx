import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homecontainer">
      <Featured/>
      <h1 className="homeTitle">Browse by Property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guests Love</h1>
      <FeaturedProperties/>
      <MailList/>
      <Footer/>
    </div>
    </>
  )
}

export default Home