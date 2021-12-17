import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'
const Attraction = ( props ) => {
    return (
        <div className='content'>
            <div className='big-container'>

<h2><div className='header-txt'>{props.attraction.name}</div></h2>


                    <img src={props.attraction.imageURL} alt='attraction pictuuuuure' />
                

                    <p>{props.attraction.description}</p>
                    
                    <div className='card-buttons center'>

                    <Link className='link-details' Link to={"dining/" + props.attraction._id}>
                    <button className='btn btn-primary'>
                        Details</button>
                        </Link>
                        
                        <a href={props.attraction.website} target="_blank" rel="noreferrer">
                        <button className='btn btn-primary'>
                        Website
                        </button></a>

                    </div>

            </div>
        </div>
    )
}

export default class dining extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            attraction: [],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get( BACKEND_URL + 'dining/' )
            .then( response => {
                this.setState( {
                    dining: response.data,
                    loading: false
                } )
                console.log( 'this is the list of dining' )
            } )
            .catch( ( error ) => {
                console.log( error )
            } );
    }
    diningList() {
        return this.state.dining.map( ( currentAttraction ) => {
            return <Attraction attraction={currentAttraction} key={currentAttraction._id} />
        } )
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                    <div className='diningContainer'>
                        <h2 className='diningHeader'>dining</h2>
                        <div className='diningInnerContainer'>
                            {this.diningList()}
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