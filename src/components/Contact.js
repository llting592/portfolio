import { useRef, useState } from 'react';
import Socials from './Socials';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import {
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import {FaRegEnvelope} from 'react-icons/fa'



function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_081k7sf', 'template_3e9eyzv', formRef.current, 'NJm_1Ks0xEEicgPGb')
            .then((result)=>{
                console.log(result.text);
                setDone(true)
            },
            (error)=>{
                console.log(error.text);
            })
    }
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
//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('service_081k7sf', 'template_3e9eyzv', e.target, 'NJm_1Ks0xEEicgPGb')
//         .then((result)=>{
//             console.log(result.text);
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Message sent!'
//             })
//         }, (error) => {
//             console.log(error.text);
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Something went wrong, please try again',
//                 text: error.text,
//         })
//     });
//     e.target.reset()
// };


    return (
        <div className = 'contact-section'>
            <div className ='contact-wrapper'>
                <div className = 'contact-me'>
                    <h1>Connect with me: </h1>
                    <div className='contact-info'>
                    <div className="c-info-item">
                            <a href='mailto:llting592@gmail.com' target="_blank"><FaRegEnvelope/>llting592@gmail.com</a>
                        </div>
                        <div className="c-info-item">
                            <a href='https://github.com/llting592' target="_blank"><AiFillGithub/>llting592</a>
                        </div>
                        <div className="c-info-item">
                            <a href='https://www.linkedin.com/in/lloyd-ting-82b316182/' target="_blank"><AiFillLinkedin/>lloyd-ting</a>
                        </div>
                    </div>
                </div>
                <div className= 'contact-right'>
                    <h1 className= 'contact-des'>Contact me</h1>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" placeholder='Name' name="user_name" />
                        <input type="text" placeholder='Subject' name="user_subject" />
                        <input type="text" placeholder='Email' name="user_email" />
                        <textarea rows="5" placeholder='Message' name="message"/>
                    </form>
                    <Button type ='submit' color='green'>Submit</Button>
                </div>
            </div>
            
            
                {/* <Form.Field id='form-input-email'
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
                /> */}
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
                
            
        </div>
    )
}

export default Contact;