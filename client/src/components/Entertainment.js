import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'
const Attraction = ( props ) => {
    return (
        <div className='allEntertainment'>
            <div className='entertainmentCard'>
                <div className='cardImage'>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction pictuuuuure' />
                </div>
                <div>
                    <div className='text-name'>{props.attraction.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"entertainment/" + props.attraction._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.attraction.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Entertainment extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            attraction: [],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get( BACKEND_URL + 'entertainment/' )
            .then( response => {
                this.setState( {
                    entertainment: response.data,
                    loading: false
                } )
                console.log( 'this is the list of entertainment' )
            } )
            .catch( ( error ) => {
                console.log( error )
            } );
    }
    entertainmentList() {
        return this.state.entertainment.map( ( currentAttraction ) => {
            return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
        } )
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                    <div className='entertainmentContainer'>
                        <h2 className='entertainmentHeader'>Entertainment</h2>
                        <div className='entertainmentInnerContainer'>
                            {this.entertainmentList()}
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