import React from 'react'
import {GiCutDiamond} from "react-icons/gi"
import {GiCrystalize} from "react-icons/gi"
import { FaFire } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./Pricing.css"
import { motion } from "framer-motion/dist/framer-motion";

function Pricing() {

    const fade = {
        opacity: 1,
        transition:{
            duration: 2
        }
    }

    return (
        <motion.div className='pricing-section' initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }} >
            <h1>Pricing</h1>
            <div className="cards-group">
                <div className="card-container">
                    <Link to="/sign-up" className='card-link'>
                        <div className="icon">
                            <FaFire />
                        </div>
                        <div className="title-group">
                            <div className="title">Starter</div>
                            <p className="price">$8.99</p>
                            <p className="tag">per month</p>
                        </div>
                        <ul className="list-items">
                            <li>100 Transactions</li>
                            <li>2% Cash Back</li>
                            <li>$10,000 Limit</li>
                        </ul>
                        <Button buttonColor="primary" buttonSize="btn-wide">Choose Plan</Button>
                    
                    </Link>
                </div>  
                <div className="card-container">
                    <Link to="/sign-up" className='card-link'>
                        <div className="icon">
                            <GiCrystalize />
                        </div>
                        <div className="title-group">
                            <div className="title">Gold</div>
                            <p className="price">$29.99</p>
                            <p className="tag">per month</p>
                        </div>
                        <ul className="list-items">
                            <li>1000 Transactions</li>
                            <li>3.5% Cash Back</li>
                            <li>$100,000 Limit</li>
                        </ul>
                        <Button buttonColor="blue" buttonSize="btn-wide">Choose Plan</Button>
                    
                    </Link>
                </div>  
                <div className="card-container">
                    <Link to="/sign-up" className='card-link'>
                        <div className="icon">
                            <GiCutDiamond />
                        </div>
                        <div className="title-group">
                            <div className="title">Diamond</div>
                            <p className="price">$99.99</p>
                            <p className="tag">per month</p>
                        </div>
                        <ul className="list-items">
                            <li>Unlimited Transactions</li>
                            <li>5% Cash Back</li>
                            <li>Unlimited Spending</li>
                        </ul>
                        <Button buttonColor="primary" buttonSize="btn-wide">Choose Plan</Button>
                    
                    </Link>
                </div>  
            </div>
        </motion.div>
    )
}

export default Pricing
