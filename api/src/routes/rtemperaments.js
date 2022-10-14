require('dotenv').config();

const {Router} = require('express')
const router = Router()

const axios = require('axios')

const { Temperament } = require('../db')

router.get('/',async (req, res) => {
        try {
         // si ya los tengo cargados en la DB los consumo desde alli.
         const temperamentsDb = await Temperament.findAll(); //aca le meto a la variable que cree todo lo que tiene la tabla
         if (temperamentsDb.length >= 1) return res.json(temperamentsDb)
        
         const response = await axios.get('https://api.thedogapi.com/v1/breeds');
         const temperamentsData = response.data

        let everyTemperament = temperamentsData.map(dog => dog.temperament ? dog.temperament : null).map(dog => dog && dog.split(', '));
       
        let eachTemperament = [...new Set(everyTemperament.flat())];
        //aca creó un arreglo con todos los nombres de temperamentos sin repetidos de una sola dimension sin subarrays
        eachTemperament.forEach(el => {
            if (el) { // temperament : ,
                Temperament.findOrCreate({
                    where: { name: el}
                });
            }
        });
       
        eachTemperament = await Temperament.findAll();
        res.status(200).json(eachTemperament);
    } catch (error) {
        res.status(404).send(error)
    }
});
module.exports = router