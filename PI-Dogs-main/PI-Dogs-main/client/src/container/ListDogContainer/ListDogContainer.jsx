import React from 'react'
import CardContainer from '../Card/CardContainer'
import Pagination from '../../Components/Pagination/Pagination'
import { useState, useEffect } from 'react'

import { useSelector } from 'react-redux'

const ListDogContainer = () => {
    const [data, setData] = useState([]);
    const [dogForPage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const totalDog = data.length
    const dogRedux = useSelector((state)=> state.dogs)
    const filterRedux = useSelector((state) => state.filterDog)

    useEffect(() =>{
      if(filterRedux.length > 0 ){
        setData(filterRedux)
        setCurrentPage(1)
      }else{
        setData(dogRedux)
      }
    },[filterRedux, dogRedux])
   


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