import React from 'react'
import style from './Collage.module.css'
import Loanding from '../../Components/Loading/Loanding';
import { Link } from 'react-router-dom';

const Collage = ({data}) => {

    
    if(data.length > 0){
         return (
    <div className={style.flex}>
        <h1 className={style.title}>Collage</h1>
        <div className={style.grid}>
            {data.map(e => (
                <Link to={`/dogs/${e.id}`} className={style.link} key={e.id}>
                <div className={style.containerImg}>
                    <img src={e.img} alt=""  className={style.img}/>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
    }else {
        return (
            <div>
                <Loanding/>
            </div>
        )
    }
 
}

export default Collage