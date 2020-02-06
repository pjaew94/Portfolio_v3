import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-scroll'
import './navi.scss'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import HamburgerLogo from '../hamburger/hamburgerLogo/hamburgerLogo'

function Navi() {

  useEffect(() => {
    gsap.from(".navi-container-2", { autoAlpha: 0, y: -30, duration: 1.5, delay: 0.5, ease: "power2" })
  })

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y)
  })



  return (
    <div className='navi-container'>
      <div className="navi-container-2">

        <div className="logo">JWP <span>Web Developer</span></div>

        <div className="navi-spacer"></div>

        <div className="navi-links">

          <div className="navi-link-container">
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
          <div className="navi-link-container">
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
          <div className="navi-link-container">
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
          <div className="navi-link-container">
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
      </div>
      <div className="hamburger-logo-wrapper">
        <HamburgerLogo />
      </div>
    </div>
  )
}

export default Navi