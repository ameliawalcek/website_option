import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FooterContext, HeroContext, ProjectContext, ToolContext, AboutContext } from '../../App'
import './NavBar.css'

const NavBar = () => {
    const [click, setClick] = useState(false)
    const footerRef = useContext(FooterContext)
    const heroRef = useContext(HeroContext)
    const projectRef = useContext(ProjectContext)
    const toolRef = useContext(ToolContext)
    const aboutRef = useContext(AboutContext)

    const handleClick = () => setClick(prevClick => !prevClick)

    const closeMobileMenu = () => setClick(false)

    const handleRef = (ref) => {
        ref.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
    
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <p onClick={() => handleRef(heroRef.current)}>
                        <Link className='navbar-logo' onClick={closeMobileMenu}>
                        Portfolio <i className="fab fa-typo3" />
                    </Link>
                        </p>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item' onClick={() => handleRef(heroRef.current)}>
                            <Link className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item' onClick={() => handleRef(aboutRef.current)}>
                            <Link className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item' onClick={() => handleRef(projectRef.current)}>
                            <Link className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className='nav-item' onClick={() => handleRef(toolRef.current)}>
                            <Link className='nav-links' onClick={closeMobileMenu}>Tools</Link>
                        </li>
                        <li className='nav-item' onClick={() => handleRef(footerRef.current)}>
                            <Link className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
