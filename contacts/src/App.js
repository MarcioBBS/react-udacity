import React, {Component} from 'react';
import ListContacts from './ListContacts';
import * as ContactAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';

 class App extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    ContactAPI.getAll()
      .then(contacts =>{
        this.setState(()=> ({
          contacts
        })) 
      });
  };

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id
      })
    }));

    ContactAPI.remove(contact);
  };

   render() {
     return (
       <div>
         {/* this Router Component uses the render propertie because we are passing props here */}
         <Route exact path='/' render= {() => (
           <ListContacts 
            onDeleteContact = {this.removeContact}
            contacts= {this.state.contacts} 
           />
         )} />      
         {/* this uses the component to render the CreateContact component*/}
         <Route path='/create' component={ CreateContact } />          
       </div>
     )
   };
 }

export default App;