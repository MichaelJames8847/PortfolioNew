import { Col, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Home.css"
import { technologies, userData } from '../data/Data';

export function Home() {
    return (
        <Container fluid className='home'>
          <Row className='hero-section'>
            <Col className='text-center'>
              <img src={userData.profilePic} alt='Michael James' className='hero-headshot' />
              <h1>Michael James: Software Developer</h1>
              <p>Transforming Ideas into Digital Solutions</p>
              <Link to="/project" className='btn btn-primary'>View My Work!</Link>
            </Col>
          </Row>
  
          <Row className='about-me-section'>
            <Col>
                <h2>Gamer, Coder, Chef</h2>
                <p>A unique blend of creativity, culinary arts, and coding.</p>
            </Col>
          </Row>
  
          <Row className='tech-stack'>
            <Col>
              <h2>Tech Stack</h2>
              <Row>
                {technologies.map((tech, index) => (
                  <Col key={index} md={4} className='tech-item'>
                    <p>{tech.technologyName}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
  
          <Row className='contact-info'>
            <Col className='text-center'>
              <p>Email: {userData.email}</p>
              <p>Phone: {userData.phoneNumber}</p>
              <p><a href={userData.linkedIn}>LinkedIn</a></p>
              <p><a href={userData.githHub}>GithHub</a></p>
            </Col>
          </Row>
        </Container>
      )
}