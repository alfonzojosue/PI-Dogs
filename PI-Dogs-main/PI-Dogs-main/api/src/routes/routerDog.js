const { Router } = require('express');
const {getDogs, getDogId, postDog} = require('../controllers/dogControllers')


const router = Router();

router.get('/', getDogs)
router.get("/:id", getDogId)
router.post('/', postDog)

module.exports = router;