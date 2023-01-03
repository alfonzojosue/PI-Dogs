import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getDogByTemperaments, getDogs, getTemperament, handleAlphabeticChange, handleWeightChange, reinice, getDogDbOrApi } from '../../redux/actions/actions.js';
import style from './Filters.module.css'


const Filters = () => {
    const temperaments = useSelector((state) => state.temperaments)
    const dispatch = useDispatch();
 
    useEffect(()=>{
        dispatch(getTemperament())     
}, [dispatch] );

const click = () => {
  dispatch(reinice())
}


const handleAlphaChange =(e) => {
    if (e.target.value !== "") {
      dispatch(handleAlphabeticChange(e.target.value));
    } else {
      dispatch(getDogs());
    }
  }
const handleWChange = (e) => {
  if(e.target.value !== ''){
    dispatch(handleWeightChange(e.target.value))
  }else {
    dispatch(getDogs())
  }
}

const handleTemperamentsChange = (e) => {
  if(e.target.value !== ''){
    dispatch(getDogByTemperaments(e.target.value))
  }else {
    dispatch(getDogs())
  }
}

const handleDogApiOrDb = (e) => {
  if(e.target.value !== ''){
    dispatch(getDogDbOrApi(e.target.value))
  }else {
    dispatch(getDogs())
  }
}


  return (
    <div className={style.containerFilter}>
      <div className={style.filter}>
              <select onChange={(e) => handleAlphaChange(e)} className={style.selectFilter}>
                <option value="" key={"bothAlph"}>
                  Alphabetic Order
                </option>
                <option value="abc" key={"abc"}>
                  A-Z
                </option>
                <option value="cba" key={"cba"}>
                  Z-A
                </option>
              </select>
            </div>
         <div className={style.filter}>
              <select onChange={(e) => handleWChange(e)} className={style.selectFilter}>
                <option value="" key={"bothWeight"}>
                  Weight Order
                </option>
                <option value="-/+">Minor to Major</option>
                <option value="+/-">Major to Minor</option>
              </select>
            </div>
            <div className={style.filter}>
              <select name="" id="" onChange={(e) => handleTemperamentsChange(e)} className={style.selectFilter}>
                <option value="" key={"bothTemperamenst"}>
                 Temperaments Order
                </option>
            {temperaments.map(element =>(
                <option value={element.name} key={element.id}>{element.name} </option>
            ))}
        </select>
            </div>
             <div className={style.filter}>
              <select onChange={(e) => handleDogApiOrDb(e)} className={style.selectFilter}>
                <option value="" key={"bothWeight"}>
                   API/DB
                </option>
                <option value="api">API</option>
                <option value="db">DB</option>
              </select>
            </div>
            <div className={style.buttonFilter}>
              <button className={style.buttonReinice} onClick={()=>click()}>Reinice</button>
            </div>
    </div>
  )
}

export default Filters