const { Router } = require('express');
const {getTemperaments} = require('../controllers/temperamentController')



const router = Router();

router.get('/', getTemperaments)



module.exports = router;