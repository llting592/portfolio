import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import goodApples from '../Assets/goodApplesScreenShot1.png';
import foodHero from '../Assets/welcomePage.png';
import Marketier from '../Assets/home.png';
import techblog from '../Assets/demo.png';
import weather from '../Assets/Weather-Dashboard-screenshot.png';
import notetaker from '../Assets/demo1.png';
import Particle from '../components/Particles';


function Projects() {
  return (
    <div className='background'>
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Projects </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={goodApples}
                isBlog={false}
                title="Good Apples"
                description="Product review aggregator that allows users to compare reviews and prices across a variety of e-commerce platforms."
                link="https://github.com/llting592/GoodApples"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={foodHero}
                isBlog={false}
                title="Food Heroes"
                description="Social media app based on restaurant experiences. Allows users to create restaurants they want to visit, as well as share and recommend experiences to friends."
                link="https://github.com/llting592/FoodHeroes"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Marketier}
                isBlog={false}
                title="Marketier"
                description="Investment platform that allows users to watch and create portfolios of stocks, cryptocurrency and foreign exchanges. Also allows users to get the latest financial news from a variety of outlets."
                link="https://github.com/llting592/marketier-lloyd"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={techblog}
                isBlog={false}
                title="Tech Blog"
                description="Simple blog website that allows users to create an account, create posts, comment on other user posts and edit posts."
                link="https://github.com/llting592/Tech-Blog-Handlebars"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weather}
                isBlog={false}
                title="Weather Dashboard"
                description="Weather Dashboard that allows users to find a variety of weather parameters using Open Weather's API."
                link="https://github.com/llting592/Weather-Dashboard"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={notetaker}
                isBlog={false}
                title="Express Note Taker"
                description="Simple note taker application that utilizes express; allows users to create, save and delete notes."
                link="https://github.com/llting592/Express-Note-Taker-App"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  );
}


export default Projects;