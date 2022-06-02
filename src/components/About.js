import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';
import Socials from './Socials';
import Profile from './Profile';


function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="about-description">
                        <h1 className='about-me-header'>
                            About Me
                        </h1>
                        <Profile/>
                        <p>
                            With a B.A. in Psychology from UCLA and a J.D. from the Benjamin N. Cardozo School of Law, I am an aspiring web developer based in NYC. Versed in popular tools for both front-end and back-end development such as HTML, CSS, Javascript, React, MySQL, GraphQL, I am a driven full stack developer that is passionate about technology and continuously learning new technologies. I have experience in creating and working with teams in creating apps that utilize APIs, React, MySQL and more. 
                            <br />

                        </p>
                        <h1 className='skills-header'>
                            Skills
                        </h1>
                        <Skills />
                        <Socials />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;