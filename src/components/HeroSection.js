import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./HeroSection.css"

function HeroSection({topLine, headLine, description, button, src, alt, darkTxt, darkBg, imgStart}) {
    return (
        <div className={darkBg ? 'hero-section darkBg': "hero-section"}>
            <div className={imgStart ? "hero-section-wrapper reverse" : "hero-section-wrapper"}>
                <div className="hero-section-text">
                    <p className={darkTxt ? "top-line darkTxt" : "top-line"}>{topLine}</p>
                    <h1 className={darkTxt ? "head-line darkTxt" : "head-line"}>{headLine}</h1>
                    <p className={darkTxt ? "description darkTxt" : "description"}>{description}</p>
                    <Link to="/"><Button buttonColor="blue" buttonSize="btn-wide">{button}</Button></Link>
                </div>
                <div className="hero-image-wrapper">
                    <figure>
                        <img src={src} alt={alt} />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
