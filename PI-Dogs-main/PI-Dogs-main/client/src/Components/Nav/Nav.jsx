import React, { useState } from 'react'
import style from './Nav.module.css'
import { Link, } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getDogByName, reinice } from '../../redux/actions/actions'
import lupa from '../../imagen/lupa.png'



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

const click = () => {
  dispatch(reinice())
}

  



  return (
    <nav className={style.nav}>
      <div className={style.containerTitle}>
      <Link to='/' className={style.linkTitle}><h1 className={style.title}>Dogbook</h1></Link>
      </div>
      <ul>
        <li onClick={()=> click()}><Link to='/home' className={style.link}>Inicie </Link> </li>
        <li><Link to='/form'className={style.link}>Create</Link></li>
        <li ><Link to='/about' className={style.link} >About</Link></li>
        <li><Link to='/collage' className={style.link}>Imagen</Link></li> 
      </ul>
      <form className={style.containerSearch} onSubmit={dispatchEvent}>
    
      <input type="text" className={style.search} onChange={changeInput} value={name} /> 
      <Link to="/home"><img src={lupa} alt="lupa" className={style.lupa} onClick={dispatchEvent}/></Link>
      </form>
      
    </nav>
  )
}

export default Nav
