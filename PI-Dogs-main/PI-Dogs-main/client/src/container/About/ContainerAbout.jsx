import React from 'react'
import Nav from '../../Components/Nav/Nav'
import About from '../../Components/About/About'
import style from './Container.module.css'

const ContainerAbout = () => {
  return (
    <div className={style.backContainer}>
        <Nav/>
        <About/>
    </div>
  )
}

export default ContainerAbout