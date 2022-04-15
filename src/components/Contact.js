import { useRef, useState } from 'react';
import Socials from './Socials';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'



function Contact() {
    // const formRef = useRef()
    // const [email, setEmail] = useState(false)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_081k7sf', 'template_3e9eyzv', formRef.current, 'NJm_1Ks0xEEicgPGb')
    //         .then((result) => {
    //         console.log(result.text);
    //         setEmail(true)
    //     },
    //         (error)=>{
    //             console.log(error.text);
    //         })
    // }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_081k7sf', 'template_3e9eyzv', e.target, 'NJm_1Ks0xEEicgPGb')
        .then((result)=>{
            console.log(result.text);
            Swal.fire({
                icon: 'success',
                title: 'Message sent!'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong, please try again',
                text: error.text,
        })
    });
    e.target.reset()
};


    return (
        <div>
            <h1>Get in touch with me!</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field id='form-input-email'
                control = {Input}
                label = 'Email'
                name='user_email'
                placeholder='Email...'
                required
                icon='mail'
                iconPosition='left'
                />
                <Form.Field id='form-input-name'
                control={Input}
                label = 'Name'
                name= 'user_name'
                placeholder = 'Name...'
                requiredicon='user circle'
                iconPosition = 'left'
                />
                <Form.Field id='form-textarea-message'
                control= {TextArea}
                label='Message'
                name='user_message'
                placeholder='Message...'
                required
                />
                {/* <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required />
                </div>
                <button type="submit">Submit</button>
                {email && <div className = 'sent'> Message Sent!</div>} */}
                <Button type ='submit' color='green'>Submit</Button>
            </Form>
            <Socials/>
        </div>
    )
}

export default Contact;