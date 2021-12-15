const router = require('express').Router()
let Attraction = require('../models/attractions.model')

router.route('/').get((req, res) => {
    Attraction.find()
    .then(attraction =>
        res.json(attraction))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Attraction.findById(req.params.id)
    .then((attraction) =>{
        res.json(attraction)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Attraction.findById(req.params.id)
        .then((attraction)=>{
            attraction.name = req.body.name
            attraction.description = req.body.description
            attraction.website = req.body.website
            attraction.imageURL = req.body.imageURL
      
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const website = req.body.website
    const imageURL = req.body.imageURL
 
    const newAttraction = new Attraction ({
        name,
        description,
        website,
        imageURL,
    
        })
    newAttraction.save()
        .then(()=>{
            res.json('Attraction Added to database')
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
})

module.exports = router;