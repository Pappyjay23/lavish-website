import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdFingerprint} from "react-icons/md"
import {FaBars, FaTimes} from "react-icons/fa"
import "./Navbar.css"
import Button from './Button'

function Navbar() {

    const [clicked, setClick] = useState(false)
    const menuToggle =()=>{
        setClick(!clicked)
    }
    const [button, setButton] = useState(true)
    const showButton =()=>{
        if (window.innerWidth < 960) {
            setButton(false)
        }else{
            setButton(true)
        }
    }

    const closeMenu =()=>{
        setClick(false)
    }

    window.addEventListener("resize", showButton)

    return (
        <div className='navbar'>
            <Link to="/" className='nav-title' onClick={closeMenu}>
                <MdFingerprint className='nav-icon' /> LAVISH
            </Link>
            <div className="menu-toggler" onClick={menuToggle} >
                {clicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={clicked ? 'nav-list active' : "nav-list"}>
                <li className='nav-links' onClick={closeMenu}>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li className='nav-links' onClick={closeMenu}>
                    <Link to="/services" className='nav-link'>Services</Link>
                </li>
                <li className='nav-links' onClick={closeMenu}>
                    <Link to="/products" className='nav-link'>Products</Link>
                </li>
                <li className='nav-links' onClick={closeMenu}>
                    {button ? 
                        <Link to="/sign-up" className='nav-link'><Button buttonStyle="btn-outline">Sign Up</Button></Link>
                        :
                        <Link to="/sign-up" className='nav-link-mobile'><Button buttonSize="btn-mobile" buttonStyle="btn-outline">Sign Up</Button></Link>
                    }
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar
