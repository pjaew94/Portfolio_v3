import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

import './projectpage.scss'

import shopSvg from '../svgs/Shop.svg'

function ProjectPage() {

  //Page animation on view
  const [project, inViewProject] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  useEffect(()=> {
    if(inViewProject){
      gsap.to(".project-link", {autoAlpha:1,y:0,duration:1.5,delay:0.7,stagger:0.2,ease:"power2"})
      gsap.to(".shop-svg", {autoAlpha:1,y:0,duration:1.5,delay:0.7,ease:"power2"})
    }
  }, [inViewProject])

  //project hover animation
  function projectHover1(){
    gsap.to(".p1", {transformOrigin:"left",color:"white",duration:0.5,ease:"power2"})
  }

  function projectUnhover1(){
    gsap.to(".p1", {transformOrigin:"right",color:"black",duration:0.5,ease:"power2"})
  }

  function projectHover2(){
    gsap.to(".p2", {transformOrigin:"left",color:"white",duration:0.5,ease:"power2"})
  }

  function projectUnhover2(){
    gsap.to(".p2", {transformOrigin:"right",color:"black",duration:0.5,ease:"power2"})
  }


  return (
    <div name='projects' className='project-page-container'>
      <div className="project-page-container-2" ref={project}>
        <div className="projects-container">
          <a onMouseEnter={projectHover1} onMouseLeave={projectUnhover1} class='p1 project-link' href='https://jae-park.netlify.com/'>Project One</a>
          <a onMouseEnter={projectHover2} onMouseLeave={projectUnhover2} class='p2 project-link' href='https://ridnyi-house-project.netlify.com'>Project Two</a>
        </div>
        <img className='shop-svg' src={shopSvg} alt=''></img>
      </div>
    </div>
  )
}

export default ProjectPage