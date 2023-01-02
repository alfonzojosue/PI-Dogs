import React from 'react'
import style from './Characteristic.module.css'


const Characteristic =  ({dog}) => {
    
    
    

  return (
    <div>
        
        {dog.map(e=> (
            <div key={e.id} className={style.container}>
                <section>
                    <img src={e.img} alt={e.name} className={style.imgDog}/>
                </section>
                <section className={style.containerText}>
                    <h1 className={style.titleDetail}>{e.name}</h1>
                    <h3 className={style.titleCaracteristic}>Life span</h3>
                    <p className={style.textP}>{e.life}</p>
                    <h3 className={style.titleCaracteristic}>Temperaments</h3>
                    <p className={style.textP}>{e.temperament}</p>
                    <div className={style.containerMetric}>
                    <div className={style.containerSecundary}>
                    <h3 className={style.titleCaracteristic}>Weight</h3>
                    <p className={style.textP}>Min:{e.weight.imperial.split('-')[0]}</p> <p className={style.textP}>Max:{e.weight.imperial.split('-')[1]}</p>
                    </div>
                    <div className={style.containerSecundary}>
                    <h3 className={style.titleCaracteristic} >Height</h3>
                    <p className={style.textP}>Min:{e.height.imperial.split('-')[0]}</p> <p className={style.textP}>Max:{e.height.imperial.split('-')[1]}</p>
                    </div>
                    </div>
                </section>
            
            </div>
        ))}
    </div>
  )
}

export default Characteristic