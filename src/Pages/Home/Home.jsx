import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import NavbarComp from '../../components/NavbarComp/NavbarComp'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

const Home = () => {
  return (
    <div>
        <NavbarComp/>
        <Banner/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <ReviewCard/>
        <Footer/>
    </div>
  )
}

export default Home