import React, { useRef } from 'react'
import gsap from 'gsap'

import './hamburgerLogo.scss'

import HamburgerState from '../hamburgerState/hamburgerState'

function HamburgerLogo() {

  const burgerClickElement = useRef(null)
  const hamburgerState = []

  function clickBurger() {
    burgerClickElement.current.changeStatus()

    if (hamburgerState[0] === true) {
      gsap.to(".hamburger-line-1", {transformOrigin:"50% 50%",rotation:25,duration:1,ease:"power2"})
      gsap.to(".hamburger-line-3", {transformOrigin:"50% 50%",rotation:-25,duration:1,ease:"power2"})
      gsap.to(".hamburger-line-2", {x:-20,duration:1,ease:"power2"})
    } else {
      gsap.to(".hamburger-line-1", {transformOrigin:"50% 50%",rotation:0,duration:1,ease:"power2"})
      gsap.to(".hamburger-line-3", {transformOrigin:"50% 50%",rotation:0,duration:1,ease:"power2"})
      gsap.to(".hamburger-line-2", {x:0,duration:1,ease:"power2"})
    }
  }

  return (
    <div 
    className='hamburger-logo-container'
    onClick={clickBurger}
    >
      <div className="hamburger-line-1 line"></div>
      <div className="hamburger-line-2 line"></div>
      <div className="hamburger-line-3 line"></div>

    <HamburgerState 
      ref={burgerClickElement}
      hamburgerState={hamburgerState}
    />
    </div>
  )
}

export default HamburgerLogo