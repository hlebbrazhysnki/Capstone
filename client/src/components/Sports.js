import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'
const Attraction = ( props ) => {
    return (
        <div className='allSports'>
            <div className='sportsCard'>
                <div className='cardImage'>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction pictuuuuure' />
                </div>
                <div>
                    <div className='text-name'>{props.attraction.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"sports/" + props.attraction._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.attraction.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Sports extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            attraction: [],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get( BACKEND_URL + 'sports/' )
            .then( response => {
                this.setState( {
                    sports: response.data,
                    loading: false
                } )
                console.log( 'this is the list of sports' )
            } )
            .catch( ( error ) => {
                console.log( error )
            } );
    }
    sportsList() {
        return this.state.sports.map( ( currentAttraction ) => {
            return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
        } )
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                    <div className='sportsContainer'>
                        <h2 className='sportsHeader'>Sports</h2>
                        <div className='sportsInnerContainer'>
                            {this.sportsList()}
                        </div>
                    </div>

                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}