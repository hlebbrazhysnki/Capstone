const router = require( 'express' ).Router();
let Nightlife = require( '../models/nightlife.model' );

router.route( '/' ).get( ( req, res ) => {
    Nightlife.find()
        .then( nightlife => res.json( nightlife ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/:id' ).get( ( req, res ) => {
    Nightlife.findById( req.params.id )
        .then( ( nightlife ) => {
            res.json( nightlife )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
} ).put( ( req, res ) => {
    Nightlife.findById( req.params.id ).then( (nightlife ) => {
        nightlife.name = req.body.name
        nightlife.description = req.body.description
        nightlife.website = req.body.website
        nightlife.imageURL = req.body.imageURL
    } ).catch( ( err ) => {
        res.status( 400 ).json( 'Error ' + err )
    } )
} )

router.route( '/add' ).post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newNightlife = new Nightlife( {
        name,
        description,
        imageURL,
        website,
    } )

    newNightlife.save()
        .then( () => res.json( 'nightlife added!' ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

module.exports = router;