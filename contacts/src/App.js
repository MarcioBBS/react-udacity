const ContactList = props => {   
  const people = props.contacts;
  return (
    <ol>
      {people.map(person => <li key={person.name}> {person.name} </li> )}
    </ol>
  );
}

const App = () => {
  return (
    <div className="App">
      <ContactList contacts ={[
        { name: 'Marcelo'},
        { name: 'Fabio'},
        { name: 'Jaciara'}
      ]}/>      
      <ContactList contacts ={[
        { name: 'Steve'},
        { name: 'Ken'},
        { name: 'John'}
      ]}/>
       <ContactList contacts ={[
        { name: 'Leah'},
        { name: 'Julian'},
        { name: 'Pam'}
      ]}/>
    </div>
  );
}

export default App;


// **** USING CLASSES ****
// import React, { Component } from 'react';

// class ContactList extends React.Component {
//   render() {    
//     const people = this.props.contacts;

//     return <ol> {people.map(person => <li key = {person.name}> {person.name}</li>)} </ol>
//   } 
// }

// class App extends Component {
//   render() {
//     return (
//       <div className = "App">
//         <ContactList contacts = {[
//           { name: 'Joao'},
//           { name: 'Maria'},
//           { name: 'Carlos'}
//         ]}/>
//         <ContactList contacts = {[
//           { name: 'Felipe'},
//           { name: 'Thiago'},
//           { name: 'Samanta'}
//         ]}/>
//       </div>
//     )
//   }
// }

// export default App;