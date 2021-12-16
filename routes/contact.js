const router = require('express').Router()
let Contact = require('../models/contact.model')

router.route('/').get((req, res) => {
    Contact.find()
    .then(contact =>
        res.json(contact))
        .catch((err) => {
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
    .then((contact) =>{
        res.json(contact)
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    });
}).put((req,res)=>{
    Contact.findById(req.params.id)
        .then((contact)=>{
            contact.name = req.body.name
            contact.email = req.body.email
            contact.comment = req.body.comment
      
        })
    .catch((err) => {
        res.status(400).json('Error ' + err)
    });
});

router.route('/add').post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const comment = req.body.comment
 
    const newContact = new Contact ({
        name,
        email,
        comment,
    
        })
    newContact.save()
        .then(()=>{
            res.json('Contact Added to database')
            })
            .catch((err)=>{
                res.status(400).json("Error: " + err)
            })
})

module.exports = router;