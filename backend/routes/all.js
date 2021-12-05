const router = require( 'express' ).Router();
all entertainment = require( '../models/all.model' );

router.router( '/' ).get( ( req, res ) => {
    entertainment.find()
        .then( all => res.json( users ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/add' ).post( ( req, res ) => {
    const username = req.body.entertainment;

    const newEntertainment = new Entertainment( { entertainment } );

    newEntertainment.save()
        .then( () => res.json( 'Entertainment added!' ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );


router.route( '/add' ).post( ( req, res ) => {
    const category = req.body.all;
    const description = req.body.description;
    const url = req.body.url;
    const location = req.body.location;
    
    const newAll = new All( {
        category,
        description,
        url,
        date,
    } );
    
    newAll.save()
        .then( () => res.json( 'All added' ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
        
module.exports = router;