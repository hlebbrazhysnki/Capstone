const router = require( 'express' ).Router();
let Shopping = require( '../models/shopping.model' )

router.route( '/' ).get( ( req, res ) => {
    Shopping.find()
        .then( shopping => res.json( shopping ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/:id' ).get( ( req, res ) => {
    Shopping.findById( req.params.id )
        .then( ( shopping ) => {
            res.json( shopping )
        } ).catch( ( err ) => {
            res.status( 400 ).json( 'Error ' + err )
        } );
} ).put( ( req, res ) => {
    Shopping.findById( req.params.id ).then( ( shopping ) => {
        shopping.name = req.body.name
        shopping.description = req.body.description
        shopping.website = req.body.website
        shopping.imageURL = req.body.imageURL
    } ).catch( ( err ) => {
        res.status( 400 ).json( 'Error ' + err )
    } )
} )


router.route( '/add' ).post( ( req, res ) => {
    const name = req.body.name;
    const description = req.body.description;
    const imageURL = req.body.imageURL;
    const website = req.body.website;

    const newShopping = new Shopping( {
        name,
        description,
        imageURL,
        website,
    } )

    newShopping.save()
        .then( () => { res.json( 'Shopping added' ) } )
        .catch( ( err ) => { res.status( 400 ).json( 'Error: ' + err ) } );
} )
module.exports = router;