import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { dataThree } from '../Data'

function Products() {
    return (
        <>
          <Pricing />
          <HeroSection {...dataThree} />  
        </>
    )
}

export default Products
