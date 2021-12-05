const router = require( 'express' ).Router();
let entertainment = require( '../models/entertainment.model' );

router.router( '/' ).get( ( req, res ) => {
    entertainment.find()
        .then( entertainment => res.json( users ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

router.route( '/add' ).post( ( req, res ) => {
    const username = req.body.entertainment;
    
    const newEntertainment = new Entertainment( { entertainment } );
    
    newEntertainment.save()
        .then( () => res.json( 'Entertainment added!' ) )
        .catch( err => res.status( 400 ).json( 'Error: ' + err ) );
} );

module.exports = router;