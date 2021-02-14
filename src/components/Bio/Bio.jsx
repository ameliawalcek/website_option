import React, { useContext } from 'react'
import { AboutContext, ProjectContext } from '../../App'
import './Bio.css'

const Bio = () => {
    const aboutRef = useContext(AboutContext)
    const projectRef = useContext(ProjectContext)

    return (
        <>
            <div className='container' ref={aboutRef}>
                <h1 style={{ color: 'black' }}>ABOUT ME...</h1>
                <div className='bio-container'>

                </div>
            </div>
            <div className='project-div' ref={projectRef}></div>
        </>
    )
}

export default Bio