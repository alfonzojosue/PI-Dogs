import React, { useState } from 'react'
import style from './Nav.module.css'
import Home from '../../View/Home/Home'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDogByName } from '../../redux/actions/actions'
import lupa from '../../imagen/lupa.png'



//import {Link} from 'react-router-dom'

function Nav() {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const changeInput = (e) => {
    setName(e.target.value)
    
  }
  const dispatchEvent = (event) => {
    event.preventDefault()
    dispatch(getDogByName(name))
      setName('')
  }



  return (
    <nav className={style.nav}>
      <div className={style.containerTitle}>
      <Link to='/' className={style.linkTitle}><h1 className={style.title}>Dogbook</h1></Link>
      </div>
      <ul>
        <li><Link to='/home' className={style.link}>Inicie </Link> </li>
        <li><Link to='/form'className={style.link}>Create</Link></li>
        <li ><Link to='/about' className={style.link} >About</Link></li>
        <li><Link to={<Home/>} className={style.link}>Imagen</Link></li> 
      </ul>
      <form className={style.containerSearch} onSubmit={dispatchEvent}>
    
      <input type="text" className={style.search} onChange={changeInput} value={name} /> 
      <img src={lupa} alt="lupa" className={style.lupa} onClick={dispatchEvent}/>
      </form>
      
    </nav>
  )
}

export default Nav
