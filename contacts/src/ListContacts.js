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

    //  calls setState(), merging in the new state to update the component's internal state.
    updateQuery = userQuery => {
        this.setState(currentState => ({
            query: userQuery.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('');
    }

    render() {
        const { query } = this.state;
        const { contacts, onDeleteContact } = this.props;

        const showingContacts = query === ''
            ? contacts 
            : contacts.filter(c => (c.name.toLowerCase().includes(query.toLocaleLowerCase())));

        return (

            <div className= "list-contacts">
                <div className= "list-contacts-top">
                    <input 
                        className= "search-contacts"
                        type= "text"
                        placeholder= "Search Contacts"
                        /* Current Value - the displayed value will always be the value in the component's state*/
                        value = {query} 
                        /* Get value that is being typed 
                           The onChange event listener invokes the updateQuery() function. 
                        */
                        onChange = {event => {this.updateQuery(event.target.value)}}  
                    />
                </div>

                
                { // && calls guard app operator. It means that the code will be executed if "showingContacts.length !== contacts.length" is true 
                showingContacts.length !== contacts.length && ( 
                    <div className= 'showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick= {this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className= 'contact-list'>
                    { showingContacts.map(contact => (
                        <li key= {contact.id} className= 'contact-list-item'>
                            <div className='contact-avatar' style= {{backgroundImage: `url(${contact.avatarURL})`}}></div>
                            <div className= 'contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button 
                                onClick = {() => onDeleteContact(contact)}
                                className= 'contact-remove'>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
            
    
        );
    }
}

export default ListContacts; 