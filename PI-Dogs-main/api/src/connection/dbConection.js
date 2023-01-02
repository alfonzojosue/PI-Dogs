const {Dog, Temperament} = require('../db')

const dbDogs = async() => {
     let dataDb = await Dog.findAll({
            include:{
                model: Temperament,
                attributes: ["name"]            }
        })
        
         const data = dataDb.map(e => {
       return{
          id:e.id,
          name:e.name,
          height:e.height,
          weight:e.weight,
          life_span:e.life_span,
          temperament:e.temperaments.map(e => e.name ),
          img:e.image,
          }
        });
        return data
    }

   module.exports = {
    dbDogs
   }