import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'

import './aboutPage.scss'

import aboutSvg from '../svgs/Practice.svg'


function AboutPage() {
  
  //About animation on view
  const [about, inViewAbout] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewAbout){
      gsap.to([".who-text",".hook-text",".s-line1", ".s-line2", ".s-line3", ".s-line4", ".s-line5"], {autoAlpha:1,x:0,duration:1.5,delay:0.7,stagger:0.15,ease:"power2"})
      gsap.to(".about-svg", {autoAlpha:1,x:0,duration:2,delay:0.7,ease:"power2"}) 
    }
  }, [inViewAbout])

  return(
    <div name='about' className='about-page-container'>
      <div className="about-page-container-2" ref={about}>
        <div className="about-left-container">
          <img className='about-svg'src={aboutSvg} alt=''></img>
        </div>

        <div className="about-right-container">
          <div className="about-text">
            <div className="who-text">Who?</div>
            <div className="hook-text">A little about me</div>
              <div className="s-line1 story">Yes, I am a Temple University graduate in Bachelors of Sciences in Biochemistry. You're thinking, "Biochem? What is this guy doing making websites?
              </div>
              <div className="s-line2 story">
              You know how your relatives used to consistently ask you what you wanted to become when you were younger? Mind you, I was still in elementary school trying to figure out why my school brownies were so good. Well... After pouring 6 years of my life into the science/health field, I've finally figured it out! 
              </div>
              <div className="s-line3 story">Thankfully, ever since I  accidently stumbled upon a web development tutorial video on YouTube, I've been hooked.
              </div>
              <div className="s-line4 story">Now, I am a web developer who focuses on producing modern, reliable, and responsive websites. I strive to learn new information every day to better my craft in development.
              </div>
              <div className="s-line5 story">Now I can truly tell my relatives I love what I do.
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default AboutPage