import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ListContacts extends Component {

    /**The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself. Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances. */
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = userQuery => {
        this.setState(currentState => ({
            query: userQuery.trim()
        }))
    }

    render() {
        return (

            <div className= "list-contacts">
                {JSON.stringify(this.state)}
                <div className= "list-contacts-top">
                    <input 
                        className= "search-contacts"
                        type= "text"
                        placeholder= "Search Contacts"
                        value = {this.state.query} /* Current Value */
                        onChange = {event => {this.updateQuery(event.target.value)}}  /* Get value that is being typed */
                    />
                </div>
                <ol className= 'contact-list'>
                    {this.props.contacts.map(contact => (
                        <li key= {contact.id} className= 'contact-list-item'>
                            <div className='contact-avatar' style= {{backgroundImage: `url(${contact.avatarURL})`}}></div>
                            <div className= 'contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                                onClick = {() => this.props.onDeleteContact(contact)}
                                className= 'contact-remove'>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
            
    
        );
    }
}

export default ListContacts; 