const { Router, request, response } = require('express');
const axios = require('axios');
const Place = require('../src/modules/place');
const place = require('../src/modules/place');


const routes = Router();

routes.post('/places', async (request, response) => {
   const {name, year, description} = request.body
   
  const place =  await Place.create({
    name,
    year,
    description,
    })
    
    return response.json(place);
});

routes.get('/places', async (request, response) => {
const result = await Place.find()

return response.json(result);
})





module.exports = routes;