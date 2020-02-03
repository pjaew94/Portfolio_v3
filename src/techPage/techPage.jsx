import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import './techPage.scss'

import html from '../logos/html5.png'
import css from '../logos/css3.png'
import scss from '../logos/scss.png'
import javaScript from '../logos/js.png'
import react from '../logos/react.png'
import mongodb from '../logos/mongodb.png'
import mongoose from '../logos/mongoose.png'
import node from '../logos/node.png'


function TechPage() {

  const [tech, inViewTech] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewTech){
      gsap.to(".tech-logo", {autoAlpha:1,y:0,duration:1.5,delay:0.7,stagger:0.2,ease:"power2"})
      gsap.to(".tech-text", {autoAlpha:1,x:0,duration:1.5,delay:0.7,ease:"power2"})
    }
  }, [inViewTech])

  return (
    <div className='tech-page-container'>
      <div className="tech-page-container-2" ref={tech}>
        <div className="tech-text">
          Here are the technologies I use:
        </div>
        

        <div className="tech-logo-container">
          <div className="tech-logo-container-top tech-logo">
            <div className="logo-1 logo">
              <img className='logo' src={html} alt='html'></img>
            </div>
            <div className="logo-2 logo">
              <img className='logo' src={css} alt='css'></img>
            </div>
            <div className="logo-3 logo">
              <img className='logo' src={scss} alt='scss'></img>
            </div>
            <div className="logo-4 logo">
              <img className='logo' src={javaScript} alt='javascript'></img>
            </div>
          </div>
          <div className="tech-logo-container-bottom  tech-logo">
            <div className="logo-5 logo">
              <img className='logo' src={react} alt='react'></img>
            </div>
            <div className="logo-6 logo">
              <img className='logo mongodb' src={mongodb} alt='mongodb'></img>
            </div>
            <div className="logo-7 logo">
              <img className='logo mongoose' src={mongoose} alt='mongoose'></img>
            </div>
            <div className="logo-8 logo">
              <img className='logo node' src={node} alt='node'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechPage