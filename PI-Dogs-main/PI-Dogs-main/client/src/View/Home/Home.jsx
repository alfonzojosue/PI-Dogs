import React from 'react'
import Nav from '../../Components/Nav/Nav'
import ListDogContainer from '../../container/ListDogContainer/ListDogContainer'
import style from './Home.module.css'
import Filters from '../../Components/Filters/Filters'

const Home = () => {
  return (
    <div className={style.container}>
        <Nav/>
        <Filters/>
        <ListDogContainer/>
    </div>
  )
}

export default Home