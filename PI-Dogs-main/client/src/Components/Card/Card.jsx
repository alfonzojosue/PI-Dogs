import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'


const Card =({data, lastPage, firstPage}) => {
  console.log(data)
  return (
    <>
    {data? 
    data.map(e => (
     
      <div className={style.card} key={e.id}>
        <Link to={`/dogs/${e.id}`} className={style.link}>
      <img src={e.img} alt="una imagen"  className={style.img}/>
      <h3 className={style.h}>{e.name}</h3>
      <p>Temperaments:{` ${typeof e.temperament === 'string' ? e.temperament.split(",").slice(0,3) : e.temperament.slice(0,3)}` }</p>
      <p>Weight: {`${e.weight.imperial?  e.weight.imperial : e.weight }`}</p>
     </Link>
  </div>
      
    )).slice(firstPage, lastPage) : ""}
    
    </>
  )
}

export default Card