import { Container, Row, Col } from 'react-bootstrap';
import {
    AiFillGithub,
    AiFillLinkedin
} from 'react-icons/ai';

function Socials (){
    return (
        <Container>
            <Row>
                <Col md = {12} className="contact-social">
                    <h1>Or, connect with me on: </h1>
                    <li className = "social-icon">
                        <a href="https://github.com/llting592"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color contact-social-icon">
                            <AiFillGithub/>
                        </a>
                    </li>
                    <li className = "social-icon">
                        <a href="https://www.linkedin.com/in/lloyd-ting-82b316182/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-color contact-social-icon">
                            <AiFillLinkedin/>
                        </a>
                    </li>
                </Col>
            </Row>
        </Container>
    )
}

export default Socials;