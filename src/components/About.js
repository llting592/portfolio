import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';

function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="about-description">
                        <h1>
                            About Me
                        </h1>
                        <p>
                            I am web developer based in NYC, with a B.A. in Psychology and a J.D.
                            <br/>
                            I am incredibly passionate about technology, and always looking to learn more technologies and improve my craft!
                        </p>
                        <h1>
                            Skills
                        </h1>
                        <Skills />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About;