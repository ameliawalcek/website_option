import React, { useRef, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Pages/Home'

export const HeroContext = createContext()
export const ProjectContext = createContext()
export const FooterContext = createContext()
export const ToolContext = createContext()
export const AboutContext = createContext()

function App() {
  const heroRef = useRef()
  const projectRef = useRef()
  const toolRef = useRef()
  const footerRef = useRef()
  const aboutRef = useRef()


  return (
    <HeroContext.Provider value={heroRef}>
      <ProjectContext.Provider value={projectRef}>
        <FooterContext.Provider value={footerRef}>
          <ToolContext.Provider value={toolRef}>
            <AboutContext.Provider value={aboutRef}>
              <Router>
                <NavBar />
                <Switch>
                  <Route path='/' exact component={Home} />
                </Switch>
              </Router>
            </AboutContext.Provider>
          </ToolContext.Provider>
        </FooterContext.Provider>
      </ProjectContext.Provider>
    </HeroContext.Provider>
  )
}

export default App;
