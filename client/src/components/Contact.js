import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../config'
const Contact = ( props ) => {
    return (
        <div className='allContacts'>
            <div className='contactsCard'>
                <div className='cardImage'>
                    <img className='contactImage' src={props.contact.imageURL} alt='contact pictuuuuure' />
                </div>
                <div>
                    <div className='text-name'>{props.contact.name}</div>
                    <div className='text-link'>
                        <Link className='link-details' Link to={"contacts/" + props.contact._id}>Details</Link>
                    </div>
                    <div className='website'>
                        <a className='link-site' href={props.contact.website} target="_blank" rel="noreferrer">Website</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default class Contacts extends Component {
    constructor( props ) {
        super( props )
        this.state = {
            contact: [],
            loading: true
        };
    }
    // comment
    componentDidMount() {
        axios.get( BACKEND_URL + 'contacts/' )
            .then( response => {
                this.setState( {
                    contacts: response.data,
                    loading: false
                } )
                console.log( 'this is the list of contacts' )
            } )
            .catch( ( error ) => {
                console.log( error )
            } );
    }
    contactsList() {
        return this.state.contacts.map( ( currentContact ) => {
            return <Contact contact={currentContact} key={currentContact._id} />
        } )
    }

    render() {
        return (
            this.state.loading === false ? (
                <div className='row'>
                    <div className='contactsContainer'>
                        <h2 className='contactsHeader'>Contacts</h2>
                        <div className='contactsInnerContainer'>
                            {this.contactsList()}
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