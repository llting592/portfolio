import { Link } from 'react-router-dom';
import { Nav, Row, Col } from 'react-bootstrap'
import './Layout.css'


function Navbar() {
    return (
        <>
            <nav>
                <Row className='d-flex justify-content-between'>
                    <Col className="NavflexRow">
                        <ul className='navbarLinks'>
                            <li className='Links'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='Links'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li className='Links'>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            {/* <li className='Links'>
                                <Link to='/contact'>Contact</Link>
                            </li> */}
                            <li className='Links'>
                                <Link to='/resume'>Resume</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </nav>
        </>
                )
}

export default Navbar;