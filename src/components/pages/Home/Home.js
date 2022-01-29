import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { dataFour, dataOne, dataThree, dataTwo } from '../Data'

function Home() {
    return (
        <>
          <HeroSection {...dataOne} />  
          <HeroSection {...dataTwo} />  
          <HeroSection {...dataThree} />  
          <Pricing />
          <HeroSection {...dataFour} />  
        </>
    )
}

export default Home
