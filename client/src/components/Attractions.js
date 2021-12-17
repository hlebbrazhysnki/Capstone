import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { BACKEND_URL } from '../config'
import Padding from './Padding'

const Attraction = (props) => {
    return (
        <div className='content'>
            <div className='big-container'>

<h2><div className='header-txt'>{props.attraction.name}</div></h2>


                    <img src={props.attraction.imageURL} alt='attraction pictuuuuure' />
                

                    <p>{props.attraction.description}</p>
                    
                    <div className='card-buttons center'>

                    <Link className='link-details' Link to={"art/" + props.attraction._id}>
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

export default class Shopping extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attraction:[],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get(BACKEND_URL + 'shopping/')
        .then(response => {
            this.setState({
                shopping: response.data,
                loading: false
            })
            console.log('this is the list of shopping')
        })
        .catch((error) => {
            console.log(error)
        });
    }
    shoppingList() {
        return this.state.shopping.map((currentAttraction) => {
            return <Attraction attraction = {currentAttraction} key={currentAttraction._id} />
        })
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                <div className='shoppingContainer'>
                    <h2 className='shoppingHeader'>Shopping</h2>
                    <div className='shoppingInnerContainer'>
                        {this.shoppingList()}
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

