import React from 'react'
import Characteristic from '../../Components/Characteristic/Characteristic'
import { useSelector, useDispatch } from 'react-redux';
import { getDogById } from '../../redux/actions/actions';
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loanding from '../../Components/Loading/Loanding';



const DetailDog = () => {
 
    let {id} = useParams()
    let dog = useSelector((state)=> state.dogsDetail);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        
        dispatch(getDogById(id)); 
      
      
       
}, [dispatch, id]  );
    const idApi = dog.map(e => e.id)
     
  
if(id == idApi){
  return (
    <div>
        <Characteristic dog={dog}/>
            
        
    </div>
  )
}else {
  return (
    <div>
        <Loanding/>
    </div>
  )}
}

export default DetailDog