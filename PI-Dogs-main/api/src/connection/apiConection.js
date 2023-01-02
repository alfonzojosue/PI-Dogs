const axios = require('axios')
const {Temperament} = require('../db')
const {API_KEY} = process.env;

const apiDog = async() => {
 let response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
 let dataDog = response.data.map(el => {
    return {
       id: el.id, 
       name: el.name,
       img: el.image.url,
       life: el.life_span,
       weight: el.weight,
       height: el.height,
       temperament: el.temperament
        }
 })
return dataDog
}

const temperamentApi = async() => {
    const dbDataTemperament = await Temperament.findAll();
    if(dbDataTemperament.length <= 0){
    let response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    let datatemperament = response.data.map(el => el.temperament).join()
    let data = datatemperament.toString().split(',').map(el => el.split(" ")).flat()
    let filterData = data.filter((item,index)=>{
    return data.indexOf(item) === index;
  })
  let result = filterData.filter(i => i !== "")
  return result
}
}


module.exports = {
    apiDog,
    temperamentApi
}