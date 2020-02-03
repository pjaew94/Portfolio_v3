import React, { useState, forwardRef, useImperativeHandle } from 'react'


const HamburgerState = forwardRef((props, burgerClickElement) =>{

  const [hamburgerState, setHamburgerState] = useState(false)

  function changeStatus() {
    if (hamburgerState === false) {
      setHamburgerState(true)
      props.hamburgerState[0] = true
    } else {
      setHamburgerState(false)
      props.hamburgerState[0] = false
    }
  }

  useImperativeHandle(burgerClickElement, () => {
    return {
      changeStatus: changeStatus
    }
  })

  return(
    <div className='hamburger-state-container'>
    </div>
  )
})

export default HamburgerState