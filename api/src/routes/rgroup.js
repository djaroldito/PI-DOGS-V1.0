const {Router} = require('express')
const router = Router()

const axios = require('axios')
const { dogsTOTALinfo } = require('../utils')

router.get('/',async (req,res)=>{
    try {
    
    let result = await dogsTOTALinfo()
    const group =  result.map(el => el.breed_group ? el.breed_group : 'null').map(el=> el && el.split(', '))
   
    const groupREADY = [...new Set (group.flat())]
    const final = groupREADY.filter(e => e !== 'null')

    console.log(final)
  
    res.status(200).json(final)
    } catch (error) {
        res.status(404).json(error)
    }

})

module.exports = router