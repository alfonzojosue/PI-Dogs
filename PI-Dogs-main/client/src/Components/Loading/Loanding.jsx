import React from 'react'
import style from './Loading.module.css'
import img from '../../imagen/ebfbbf96cb4bd870570c9bdb99168525.gif'
import img2 from '../../imagen/ZKZg.gif'

const Loanding = () => {
  return (
    <div className={style.container}>
        <img src={img} alt="loading" className={style.gif} />
        <img src={img2} alt="loading" className={style.img2} />
    </div>
  )
}

export default Loanding