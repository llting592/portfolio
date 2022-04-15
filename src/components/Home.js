import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import About from './About';

function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <h1 className="header"> Hello!</h1>
                    <h1 className="head-name">I'm
                        <strong className="main-name"> Lloyd Ting</strong>
                        <Type />
                    </h1>
                </Row>
                <Row>
                    <About/>
                </Row>
            </Container>
        </div>
    )
}


export default Home;