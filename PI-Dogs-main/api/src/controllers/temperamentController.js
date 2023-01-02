const {Temperament} = require('../db')
const {temperamentApi} = require('../connection/apiConection')

const getTemperaments = async (req, res, next) => {
    let data = await Temperament.findAll()
    if(data.length <= 0 ) {
    data = await temperamentApi()
    data.forEach((element) => {
    let i = element.trim()
    Temperament.findOrCreate({
      where: {name: i}
    })
  });
  const result = await Temperament.findAll()
        res.status(200).json(result)
    }else{
        res.status(200).json(data)
    }
};



module.exports = {
    getTemperaments
}