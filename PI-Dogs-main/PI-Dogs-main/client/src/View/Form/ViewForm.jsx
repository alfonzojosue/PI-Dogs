import React from 'react'
import Nav from '../../Components/Nav/Nav'
import Form from '../../Components/Form/Form'
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getTemperament } from '../../redux/actions/actions';
import style from './ViewForm.module.css'

const ViewForm = () => {
    const temperaments = useSelector((state)=> state.temperaments);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTemperament());       
}, [dispatch]);

  return (
    <div className={style.back}>
        <Nav/>
        <Form data={temperaments}/>
    </div>
  )
}

export default ViewForm ;