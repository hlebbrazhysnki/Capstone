const express = require( 'express' );
const cors = require( 'cors' );                 // a system transmitting http headers
const mongoose = require( 'mongoose' );         // connect to mongoDb 
const path = require( 'path' );

require( 'dotenv' ).config(); // configures environment variables in .env files

const app = express();                      // express server
const port = process.env.PORT || 5000;      // server port#

app.use( cors() );                          // middleware allows parsing of json - server will transmit and receive 
app.use( express.json() );
app.use( express.static( 'client/build' ) );

const uri = process.env.ATLAS_URI;          // where database is stored

mongoose.connect( uri, { useNewUrlParser: true, useUnifiedTopology: true }    // **needed for consistant updates from mongo
);
const connection = mongoose.connection;
connection.once( 'open', () => {
    console.log( "MongoDB database connection established successfully" );          // logged once connection established succesfully
} );

const sportRouter = require( './routes/sports' );
const nightlifeRouter = require( './routes/nightlife' );
const shoppingRouter = require( './routes/shopping' );
const entertainmentRouter = require( './routes/entertainment' )
const artRouter = require( './routes/art'); 
const diningRouter = require( './routes/dining' );
const attractionsRouter = require( './routes/contact' );


const contactRouter = require( './routes/contact' )

app.use( '/sports', sportRouter );
app.use( '/attractions', attractionsRouter );
app.use( '/nightlife', nightlifeRouter );
app.use( '/shopping', shoppingRouter );
app.use( '/entertainment', entertainmentRouter );
app.use( '/art', artRouter );
app.use( '/dining', diningRouter );
app.use( '/contact', contactRouter )

/* Production */
if ( process.env.NODE_ENV === 'production' ) {
    app.use( express.static( 'client/build' ) )
    app.get( '*', ( req, res ) => {
        res.sendFile( path.resolve( __dirname, 'client/build' ) )
    } )
}

// const allRouter = require( './routes/all' );
// const artRouter = require( './routes/art' );
// const entertainmentRouter = require( './routes/entertainment' );
// const museumsRouter = require( './routes/museums' );
// const shoppingRouter = require( './routes/shopping,js' );
// const sportsRouter = require( './routes/sports' );
// const diningRouter = require( './routes/dining' );

// app.use( 'all', allRouter );
// app.use( 'entertainment', entertainmentRouter );
// app.use( 'museums', museumsRouter );
// app.use( 'all', all.shoppingRouter );
// app.use( 'sports', sportsRouter );
// app.use( 'shopping', shoppingRouter );
// app.use( 'art', artRouter );
// app.use( 'dining', diningRouter );


app.listen( port, () => {                   // starts the server | begins listening to the aforementioned port 5001
    console.log( `Server is running on port: ${port}` );
} );