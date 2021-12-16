import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'
const Attraction = ( props ) => {
    return (
        <div className='allNightlife'>
            <div className='nightlifeCard'>
                <div className='cardImage'>
                    <img className='attractionImage' src={props.attraction.imageURL} alt='attraction pictuuuuure' />
                </div>
                <div>
                    <div className='text-name'>{props.attraction.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"nightlife/" + props.attraction._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.attraction.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Nightlife extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            attraction: [],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get( BACKEND_URL + 'nightlife/' )
            .then( response => {
                this.setState( {
                    nightlife: response.data,
                    loading: false
                } )
                console.log( 'this is the list of nightlife' )
            } )
            .catch( ( error ) => {
                console.log( error )
            } );
    }
    nightlifeList() {
        return this.state.nightlife.map( ( currentAttraction ) => {
            return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
        } )
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                    <div className='nightlifeContainer'>
                        <h2 className='nightlifeHeader'>Nightlife</h2>
                        <div className='nightlifeInnerContainer'>
                            {this.nightlifeList()}
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