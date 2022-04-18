import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';


function Home() {
    return (
        <div>
            <Container fluid className="home-section" id="home">
                <Row className = 'intro-section'>
                    <h1 className="header"> Hello!</h1>
                    <h1 className="head-name">I'm
                        <strong className="main-name"> Lloyd Ting</strong>
                        <Type />
                    </h1>
                    <h1>Welcome to my portfolio!</h1>
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    )
}


export default Home;