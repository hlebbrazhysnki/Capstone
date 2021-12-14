const router = require( 'express' ).Router();
let Sport = require('../models/sports.model')

router.route( '/' ).get( ( req, res ) => {
    Sport.find()
        .then(sport => res.json( sport ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route('/:id').get((req,res) => {
    Sport.findById( req.params.id )
        .then((sport) => {
            res.json( sport )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
}).put(( req, res) => {
    Sport.findById(req.params.id).then((sport) => {
        sport.name = req.body.name
        sport.description = req.body.description
        sport.website = req.body.website
        sport.imageURL = req.body.imageURL
    }).catch((err) => {
        res.status(400).json('Error ' + err)
    })
})


router.route('/add').post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newSport = new Sport({
        name,
        description,
        imageURL,
        website,
    } )

    newSport.save()
        .then( () => {res.json( 'Sport added' ) })
        .catch( (err )=> {res.status( 400 ).json( 'Error: ' + err )} );
})
    module.exports = router;