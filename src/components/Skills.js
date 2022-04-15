import { Col, Row } from 'react-bootstrap';
import {
    DiHtml5,
    DiCss3,
    DiJavascript,
    DiNodejsSmall,
    DiReact,
    DiMysql,
    DiBootstrap,
    DiMongodb
} from 'react-icons/di';
import {
    GrGraphQl
} from 'react-icons/gr';

function Skills() {
    return (
        <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
            <Col xs={3} className='skills-icons'>
                <DiHtml5 />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiCss3 />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiJavascript />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiNodejsSmall />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiReact />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiMysql />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiBootstrap />
            </Col>
            <Col xs={3} className='skills-icons'>
                <DiMongodb />
            </Col>
            <Col xs={3} className='skills-icons'>
                <GrGraphQl />
            </Col>
        </Row>
    );
}

export default Skills;