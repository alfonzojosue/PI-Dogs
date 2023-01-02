import React from 'react'
import CardContainer from '../Card/CardContainer'
import Pagination from '../../Components/Pagination/Pagination'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ListDogContainer = () => {
    const [data, setData] = useState([]);
    const [dogForPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const totalDog = data.length

    useEffect(() =>{
    const obtenerLista = async (res) => {    
        await axios.get('http://localhost:3001/dogs')
           .then(res => setData(res.data));
       
    }
    obtenerLista()
}, [])
const lastPage = dogForPage * currentPage
const firstPage = lastPage - dogForPage

  return (
    <div>
        <CardContainer lastPage={lastPage} firstPage={firstPage}/>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} dogForPage={dogForPage} totalDog={totalDog}/>
    </div>
  )
}

export default ListDogContainer