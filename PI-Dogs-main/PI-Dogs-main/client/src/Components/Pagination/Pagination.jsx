import React from 'react'
import style from './Pagination.module.css'


const Pagination = ({totalDog, dogForPage, setCurrentPage, currentPage}) => {
    const pagesNumber = [] 
    for(let i = 1; i <= Math.ceil(totalDog /dogForPage); i++ ){
        pagesNumber.push(i)
    }
    const onPreviewPage = () =>{
        setCurrentPage(currentPage - 1)
    }
    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }
    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }
    
  return (
    <nav className={style.ContainerPagination}>
        <ul className={style.ul}>
            <li>
                <button onClick={onPreviewPage} className={(currentPage === 1) ? style.disable : style.notdisable}>Preview</button>
            </li>
        {
            pagesNumber.map(number => (
                <li key={number} className={style.number}>
                    <button onClick={() => onSpecificPage(number)}
                    className={(currentPage === number) ? style.active : style.number}>
                        {number}
                        </button>
                </li>
                
            ))
        }
        <li>
            <button onClick={onNextPage} className={(currentPage === pagesNumber.length ) ? style.disable : style.notdisable}>Next</button>
        </li>
        </ul>
    </nav>
  )
}

export default Pagination