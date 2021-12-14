const router = require( 'express' ).Router();
let Art = require( '../models/art.muesuems.model' )

router.route( '/' ).get( ( req, res ) => {
    Art.find()
        .then( art => res.json( art ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/:id' ).get( ( req, res ) => {
    Art.findById( req.params.id )
        .then( ( art ) => {
            res.json( art )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
} ).put( ( req, res ) => {
    Art.findById( req.params.id ).then( ( art ) => {
        art.name = req.body.name
        art.description = req.body.description
        art.website = req.body.website
        art.imageURL = req.body.imageURL
    } ).catch( ( err ) => {
        res.status( 400 ).json( 'Error ' + err )
    } )
} )


router.route( '/add' ).post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newArt = new Art( {
        name,
        description,
        imageURL,
        website,
    } )

    newArt.save()
        .then( () => { res.json( 'Art added' ) } )
        .catch( ( err ) => { res.status( 400 ).json( 'Error: ' + err ) } );
} )
module.exports = router;