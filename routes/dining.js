const router = require( 'express' ).Router();
let Dining = require( '../models/dining.model' )

router.route( '/' ).get( ( req, res ) => {
    Dining.find()
        .then( dining => res.json( dining ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/:id' ).get( ( req, res ) => {
    Dining.findById( req.params.id )
        .then( ( dining ) => {
            res.json( dining )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
} ).put( ( req, res ) => {
    Dining.findById( req.params.id ).then( ( dining ) => {
        dining.name = req.body.name
        dining.description = req.body.description
        dining.website = req.body.website
        dining.imageURL = req.body.imageURL
    } ).catch( ( err ) => {
        res.status( 400 ).json( 'Error ' + err )
    } )
} )


router.route( '/add' ).post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newDining = new Dining( {
        name,
        description,
        imageURL,
        website,
    } )

    newDining.save()
        .then( () => { res.json( 'Dining added' ) } )
        .catch( ( err ) => { res.status( 400 ).json( 'Error: ' + err ) } );
} )
module.exports = router;