import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'
import { IconContext } from "react-icons";
import { FiSmartphone, FiMail, FiLinkedin, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import './contactPage.scss'

import contactSvg from '../svgs/Communication.svg'

function ContactPage() {


  //Contact animation on view
  const [contact, inViewContact] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  useEffect(() => {
    if (inViewContact) {
      gsap.to([".so-text", ".contact-text"], { y: 0, autoAlpha: 1, duration: 1.5, stagger: 1, delay: 0.7, ease: "power2" })

      gsap.to(".contact", { y: 0, autoAlpha: 1, duration: 1.5, stagger: 0.2, delay: 2.5, ease: "power2" })

      gsap.to(".contact-svg", { x: 0, autoAlpha: 1, duration: 1.5, delay: 2.5, ease: "power2" })
    }
  }, [inViewContact])


  //hover animations for contact
  function phoneHover() {
    gsap.to(".left-icon1", { transformOrigin: "50% 50%", rotate: "180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon1", { transformOrigin: "50% 50%", rotate: "-180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".phone-container", { color: "white", duration: 0.2, ease: "linear" })
  }
  function phoneUnhover() {
    gsap.to(".left-icon1", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon1", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".phone-container", { color: "black", duration: 0.2, ease: "linear" })
  }
  function emailHover() {
    gsap.to(".left-icon2", { transformOrigin: "50% 50%", rotate: "180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon2", { transformOrigin: "50% 50%", rotate: "-180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".email-container", { color: "white", duration: 0.2, ease: "linear" })
  }
  function emailUnhover() {
    gsap.to(".left-icon2", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon2", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".email-container", { color: "black", duration: 0.2, ease: "linear" })
  }
  function linkedHover() {
    gsap.to(".left-icon3", { transformOrigin: "50% 50%", rotate: "180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon3", { transformOrigin: "50% 50%", rotate: "-180", fontSize: "2rem", duration: 0.2, ease: "linear" })
    gsap.to(".linked-container", { color: "white", duration: 0.2, ease: "linear" })
  }
  function linkedUnhover() {
    gsap.to(".left-icon3", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".right-icon3", { transformOrigin: "50% 50%", fontSize: "1.5rem", rotate: "0", duration: 0.2, ease: "linear" })
    gsap.to(".linked-container", { color: "black", duration: 0.2, ease: "linear" })
  }




  return (
    <div name='contact' className='contact-page-container'>

      <div className="contact-page-container-2" ref={contact}>

        <div className="contact-container">
          <div className="so-text">Want to chat?</div>
          <div className="contact-text">Let's get in touch!</div>
          <a
            href='tel:1-267-640-6798'
            className="phone-container contact"
            onMouseEnter={phoneHover}
            onMouseLeave={phoneUnhover}>
            <IconContext.Provider value={{ className: "icon left-icon1" }}>
              <FiChevronLeft />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "icon" }}>
              <FiSmartphone />
            </IconContext.Provider>
            <div className="phone the-contact">+1 (267) 640 6798</div>
            <IconContext.Provider value={{ className: "icon right-icon1" }}>
              <FiChevronRight />
            </IconContext.Provider>

          </a>
          <a
            href='mailto:pjaew94@gmail.com'
            className="email-container contact"
            onMouseEnter={emailHover}
            onMouseLeave={emailUnhover}>
            <IconContext.Provider value={{ className: "icon left-icon2" }}>
              <FiChevronLeft />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "icon" }}>
              <FiMail />
            </IconContext.Provider>
            <div className="email the-contact">pjaew94@gmail.com</div>
            <IconContext.Provider value={{ className: "icon right-icon2" }}>
              <FiChevronRight />
            </IconContext.Provider>
          </a>
          <a
            href={'http://www.linkedin.com/in/jae-park-webdev'}
            target='_blank'
            className="linked-container contact"
            onMouseEnter={linkedHover}
            onMouseLeave={linkedUnhover}>
            <IconContext.Provider value={{ className: "icon left-icon3" }}>
              <FiChevronLeft />
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "icon" }}>
              <FiLinkedin />
            </IconContext.Provider>
            <div className="linked the-contact">My LinkedIn</div>
            <IconContext.Provider value={{ className: "icon right-icon3" }}>
              <FiChevronRight />
            </IconContext.Provider>
          </a>
        </div>
        <img className='contact-svg' src={contactSvg} alt='contact-svg'></img>
      </div>
    </div>
  )
}

export default ContactPage