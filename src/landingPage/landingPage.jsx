import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-scroll'

import './landingPage.scss'

import landingSvg from '../svgs/Culture.svg'

function LandingPage() {

  //Load animation
  useEffect(() => {
    gsap.from([".hello-text", ".landing-svg", ".rose-text"], { autoAlpha: 0, y: 30, duration: 1.5, delay:0.5, ease: "power2" })
    gsap.from(".arrow-1", { transformOrigin: "top", height: 0, duration: 1.5, delay:0.5, ease: "power2" })
    gsap.from(".arrow-2", { autoAlpha: 0, y: -65, duration: 1.5, delay:0.5, ease: "power2" })
    gsap.from(".arrow-3", { autoAlpha: 0, y: -65, duration: 1.5, delay:0.5, ease: "power2" })
  })

  //Arrow functional animation
  function arrowHover() {
    gsap.to(".arrow-1", { height: 90, duration: 1.5, ease: "power2" })
    gsap.to(".arrow-2", { y: 25, duration: 1.5, ease: "power2" })
    gsap.to(".arrow-3", { y: 25, duration: 1.5, ease: "power2" })
  }

  function arrowUnhover() {
    gsap.to(".arrow-1", { height: 65, duration: 1.5, ease: "power2" })
    gsap.to(".arrow-2", { y: 0, duration: 1.5, ease: "power2" })
    gsap.to(".arrow-3", { y: 0, duration: 1.5, ease: "power2" })
  }


  return (
    <div name='home' className='landing-page-container'>
      <div className="landing-page-container-2">
        <img class='landing-svg' src={landingSvg} alt=''></img>
        <div className="hello-text">Hello! I'm Jae Park</div>
        <div className="rose-text">The one and only front-end developer who enjoys building quality websites with a bachelors in biochemistry! </div>
      </div>
      <Link
        className="landing-page-spacer"
        to="projects"
        spy={true}
        smooth={true}
        duration={1200}
      >
        <div
          onMouseEnter={arrowHover}
          onMouseLeave={arrowUnhover}
          className="arrow-container">
          <div className="arrow-1"></div>
          <div className="arrow-2"></div>
          <div className="arrow-3"></div>
        </div>
      </Link>
    </div>
  )
}

export default LandingPage