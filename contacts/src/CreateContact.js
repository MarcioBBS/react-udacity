import React, {Component} from 'react';
import ImageInput from './ImageInput';
import { Link } from 'react-router-dom';
import serializeForm from 'form-serialize';

class CreateContact extends Component {

    handleSubmit = event => {
        event.preventDefault(); // Prevent the browser to serialize the form and throw it in the URL

        // Serialize the form manually and save it into a object        
        const values = serializeForm(event.target, {hash: true}); // have: true - To get back the object 
        
        this.props.onCreateContact && this.props.onCreateContact(values);

    }
    render() {
        return(
            <div>
                {/* Button Link to home */}
                <Link to= '/' className='close-create-contact'>Close</Link>

                <form onSubmit= {this.handleSubmit} className= 'create-contact-form'>
                    <ImageInput 
                        className= 'create-contact-avatar-input'
                        name= 'avatarURL'
                        maxHeight= {64}
                    />
                    <div className= 'create-contact-details'>
                        <input type= 'text' name= 'name' placeholder= 'Name' />
                        <input type= 'text' name= 'handle' placeholder= 'Handle' />
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact;