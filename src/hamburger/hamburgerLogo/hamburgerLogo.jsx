import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-scroll'

import './hamburgerLogo.scss'

import HamburgerState from '../hamburgerState/hamburgerState'
import hamburgerMenuSvg from '../../svgs/Layer 1.svg'

function HamburgerLogo() {

  const burgerClickElement = useRef(null)
  const hamburgerState = []


  function clickBurger() {
    burgerClickElement.current.changeStatus()

    if (hamburgerState[0] === true) {
      // Burger Animation
      gsap.to(".hamburger-line-1", { transformOrigin: "50% 50%", rotation: 25, duration: 1, ease: "power2" })
      gsap.to(".hamburger-line-3", { transformOrigin: "50% 50%", rotation: -25, duration: 1, ease: "power2" })
      gsap.to(".hamburger-line-2", { x: -20, duration: 1, ease: "power2" })

      //Burger Menu Pull Up
      gsap.to(".hamburger-menu-container", { x:0, duration: 0.7, ease: "power2" })
      gsap.to(".link-container", { y: 0, autoAlpha: 1, delay: 0.6, duration: 0.7, ease: "power2" })
      gsap.to(".hamburger-menu-svg", { y: 0, autoAlpha: 1, delay: 0.6, duration: 0.7, ease: "power2" })
    } else {
      // Burger Animation
      gsap.to(".hamburger-line-1", { transformOrigin: "50% 50%", rotation: 0, duration: 1, ease: "power2" })
      gsap.to(".hamburger-line-3", { transformOrigin: "50% 50%", rotation: 0, duration: 1, ease: "power2" })
      gsap.to(".hamburger-line-2", { x: 0, duration: 1, ease: "power2" })

      // Burger Menu Close
      gsap.to(".hamburger-menu-container", { x:"100%", duration: 0.7, ease: "power2" })
      gsap.to(".link-container", { y: 50, autoAlpha: 0, delay: 0.6, duration: 0.7, ease: "power2" })
      gsap.to(".hamburger-menu-svg", { y: 50, autoAlpha: 0, delay: 0.6, duration: 0.7, ease: "power2" })
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

      <div className='hamburger-menu-container'>
        <div className="hamburger-link-container">
          <div className="hamburger-link-container-2">

            <div className="link-container">
              <Link
                className='link'
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={1200} 
                onClick={clickBurger}>
                Home
        </Link>
            </div>
            <div className="link-container">
              <Link
                className='link'
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1200} 
                onClick={clickBurger}>
                Projects
        </Link>
            </div>
            <div className="link-container">
              <Link
                className='link'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1200} 
                onClick={clickBurger}>
                About
        </Link>
            </div>
            <div className="link-container">
              <Link
                className='link'
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1200} 
                onClick={clickBurger}>
                Contact
        </Link>
            </div>
          </div>
          <img className='hamburger-menu-svg' src={hamburgerMenuSvg} alt='bunny'></img>
        </div>
      </div>
    </div>
  )
}

export default HamburgerLogo