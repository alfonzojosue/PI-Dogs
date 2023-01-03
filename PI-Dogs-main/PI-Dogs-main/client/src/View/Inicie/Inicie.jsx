import React from 'react'
import style from './Inice.module.css'
import patas from '../../imagen/pata.png'
import { Link } from 'react-router-dom'

const Inicie = () => {
  
  return (
    <div className={style.inicie}>
      <div className={style.container}>
        <h1>Dogbook</h1>
        <div className={style.patas}>
         <Link to="/home"> <img src={patas} alt="img-patas" /></Link>
          <div>
          <h2>
          <span>H</span>
          <span>E</span>
          <span>L</span>
          <span>L</span>
          <span>O</span>
          <span>!</span>
          </h2>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Inicie