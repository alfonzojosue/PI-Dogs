import React from 'react'
import style from './Inice.module.css'
import patas from '../../imagen/pata.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Inicie = () => {
 useEffect(() => {
const options = {
  method: 'GET',
  url: 'https://anime-db.p.rapidapi.com/anime/by-ranking/2',
  headers: {
    'X-RapidAPI-Key': '9eb50b6ddemsh98383b5f04f46f5p10c1d5jsne8e032042dff',
    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
 },[])
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