import React from 'react'
import style from './About.module.css'
import pata from '../../imagen/pata.png'

const About = () => {
  return (
    <div className={style.containerText}>
        <div className={style.subContainer}>
        <h1 className={style.title}>DoogBook</h1>
        <p className={style.text}>Doogbook is a website where you can consult all kinds of dog breeds and create your own breed.
        This web is made with the react library in the frontend and the backend with express and Sequelize,
        here you can check the temperaments of each breed, weight, size and other things. Welcome to DogBook</p>
        <img src={pata} alt="" />
        </div>
    </div>
  )
}

export default About