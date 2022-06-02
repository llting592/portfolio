import { Container, Row, Col } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';
import {FaRegEnvelope} from 'react-icons/fa'

function Socials (){
    return (
        <Container>
            <Row className= 'social-row'>
                <Col md = {12} className="contact-social">
                    <h1>Connect with me!</h1>
                    <h3>Feel free to email me at llting592@gmail.com, or connect with me on one of my socials below!</h3>
                    <li className='social-icon'>
                    <a href='mailto:llting592@gmail.com'
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color contact-social-icon"> 
                        <IconContext.Provider value={{size:100}}>
                    
                        <FaRegEnvelope/>
                
                        </IconContext.Provider>
                        </a>
                    </li>
                    <li className = "social-icon">
                        <a href="https://github.com/llting592"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color contact-social-icon">
                            <IconContext.Provider value={{size:100}}>
                            <AiFillGithub/>
                            </IconContext.Provider>
                            
                        </a>
                    </li>
                    <li className = "social-icon">
                        <a href="https://www.linkedin.com/in/lloyd-ting-82b316182/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color contact-social-icon">
                            <IconContext.Provider value={{size:100}}>
                            <AiFillLinkedin/>
                            </IconContext.Provider>
                        </a>
                    </li>
                </Col>
            </Row>
        </Container>
    )
}

export default Socials;