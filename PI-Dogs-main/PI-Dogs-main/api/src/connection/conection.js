const {apiDog} = require('./apiConection')
const {dbDogs} = require('./dbConection')


const getData = async() =>{
    const dataApi = await apiDog()
    const dataDb = await dbDogs()

    const data = dataApi.concat(dataDb)
    return data
}

module.exports = {
    getData
}