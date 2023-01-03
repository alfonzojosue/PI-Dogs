import React from 'react'
import Card from '../../Components/Card/Card.jsx'
import style from './CardContainer.module.css'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getDogs} from '../../redux/actions/actions.js';
import Loanding from '../../Components/Loading/Loanding.jsx';

const CardContainer = ({firstPage, lastPage}) => {
    const dogs = useSelector((state)=> state.dogs);
    const dispatch = useDispatch();
    const dog = useSelector((state) => state.filterDog)


    useEffect(()=>{
        dispatch(getDogs());     
}, [dispatch] );

if(dog.length > 0 ){
  return (
    <div className={style.card} >
    
    <Card data={dog} firstPage={firstPage} lastPage={lastPage}/>
    </div>
  )
}else if(dogs.length > 0){
 
return (
    <div className={style.card} >
   
    <Card data={dogs} firstPage={firstPage} lastPage={lastPage}/>
    </div>
  )
}
else {
   return (
    <div>
        <Loanding/>
    </div>
   )

}
}

export default CardContainer