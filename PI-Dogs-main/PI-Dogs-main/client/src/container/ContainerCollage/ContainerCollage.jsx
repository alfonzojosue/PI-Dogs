import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getDogs } from '../../redux/actions/actions'
import Nav from '../../Components/Nav/Nav'
import Collage from '../../Components/CollageImagen/Collage'
import style from './ContainerCollage.module.css'

export const ContainerCollage = () => {
    const dogs = useSelector((state) => state.dogs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

  return (
    <div className={style.fondo}>
        <Nav/>
        <Collage data={dogs}/>
    </div>
  )
}
