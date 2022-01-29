import React from 'react'
import HeroSection from '../../HeroSection'
import { dataFour, dataOne } from '../Data'

function Services() {
    return (
        <>
          <HeroSection {...dataFour} />    
          <HeroSection {...dataOne} />  
          
        </>
    )
}

export default Services
