const {Dog, Temperament} = require('../db')
const {getData} = require('../connection/conection')

const getDogs = async(req, res) => {
    const { name } = req.query
    try {
        const data = await getData()
        if(name){
            const response = data.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
            if(response.length > 0 ){
              return  res.status(200).json(response)
            }else {
              return  res.status(404).json(`la raza ${name} no se existe`)
            }
        }else{
            const response = data.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    height: e.height,
                    weight:e.weight,
                    life_span: e.life_span,
                    temperament:e.temperament ? e.temperament : "not temperament",
                    img: e.img,
                }
            })
            return res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json(error)
    }

}

const getDogId = async(req, res) => {
    const {id} = req.params
    try {
        const data = await getData()
        if(id){
            const response = data.find(e => e.id == id)
            return res.status(200).json(response)
        }else{
            return res.status(400).json(`El ${id} no existe`)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}


const postDog = async(req, res) => {
    const {name, height, weight, life_span, img, temperament} = req.body
    if( !name || !height || !weight || !life_span  || !temperament) {
        res.status(404).send("Data Found")
    }
    try {
    const newDog = await Dog.create({name: name, height: height, weight: weight, life_span: life_span, img: img})
    let tempAssociated = await Temperament.findAll({
        where: {name: temperament}
    })
    newDog.addTemperaments(tempAssociated)
    res.status(200).json(newDog)
    } catch (error) {
        res.status(400).json(error)
    }
  
}
module.exports = {
    getDogs,
    getDogId,
    postDog
}