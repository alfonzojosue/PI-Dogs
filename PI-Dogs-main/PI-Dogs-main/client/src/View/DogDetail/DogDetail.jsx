import React from 'react'
import style from './DogDetail.module.css'
import Nav from '../../Components/Nav/Nav'
import DetailDog from '../../container/DetailDog/DetailDog'

const DogDetail = () => {
  return (
    <div className={style.back}>
        <Nav/>
        <DetailDog/>
    </div>
  )
}

export default DogDetail