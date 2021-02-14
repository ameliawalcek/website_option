import React, { useContext } from 'react';
import '../../App.css'
import Button from '../Button/Button'
import './HeroSection.css'
import video from '../../assets/videos/video.mp4'
import { HeroContext } from '../../App';

function HeroSection() {
    const heroRef = useContext(HeroContext)

    return (
        <>
            <div className='hero-container' ref={heroRef}>
                <video src={video} autoPlay loop muted />
                <h1>AMELIA WALCEK</h1>
                <p>Full Stack Developer</p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        DOWNLOAD CV
                </Button>
                </div>
            </div>
        </>
    );
}

export default HeroSection;