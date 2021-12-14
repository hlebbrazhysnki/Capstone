const router = require( 'express' ).Router();
let Entertainment = require('../models/entertainment.model')

router.route( '/' ).get( ( req, res ) => {
    Entertainment.find()
        .then(entertainment => res.json( entertainment ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route('/:id').get((req,res) => {
    Entertainment.findById( req.params.id )
        .then((entertainment) => {
            res.json( entertainment )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
}).put(( req, res) => {
    Entertainment.findById(req.params.id).then((entertainment) => {
        entertainment.name = req.body.name
        entertainment.description = req.body.description
        entertainment.website = req.body.website
        entertainment.imageURL = req.body.imageURL
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
})


router.route('/add').post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newEntertainment = new Entertainment({
        name,
        description,
        imageURL,
        website,
    } )

    newEntertainment.save()
        .then( () => {res.json( 'Entertainment added' ) })
        .catch( (err )=> {res.status( 400 ).json( 'Error: ' + err )} );
})
    module.exports = router;