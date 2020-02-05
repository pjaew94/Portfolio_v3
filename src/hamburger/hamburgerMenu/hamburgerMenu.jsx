import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-scroll'

import './hamburgerMenu.scss'

import hamburgerMenuSvg from '../../svgs/Layer 1.svg'

function HamburgerMenu(props) {

  useEffect(() => {
    gsap.from(".hamburger-menu-container", { x: "100%", duration: 0.7, ease: "power2" })
    gsap.from(".link-container", { y: 50, autoAlpha: 0, delay: 0.6, duration: 0.7, ease: "power2" })
    gsap.from(".hamburger-menu-svg", { y: 50, autoAlpha: 0, delay: 0.6, duration: 0.7, ease: "power2" })
  })

  return (
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
              duration={1200} >
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
              duration={1200} >
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
              duration={1200} >
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
              duration={1200} >
              Contact
          </Link>
          </div>
        </div>
        <img className='hamburger-menu-svg' src={hamburgerMenuSvg} alt='bunny'></img>
      </div>

    </div>
  )
}

export default HamburgerMenu