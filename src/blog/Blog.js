import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import { blogs } from "../data/Data";
import { Link } from "react-router-dom";
import "./Blog.css"

export default function Blogs() {
    return (
        <Container className="blog-container py-5">
            <h2 className="text-center mb-4">Latest Blogs</h2>
            <Row>
                {blogs.map((b) => (
                    <Col md={6} lg={4} key={b.id} className="mb-4">
                        <Card className="blog-card">
                            <CardBody>
                                <Link to={`/blog/${b.id}`} className="blog-card-title-link">
                                    <CardTitle tag="h5" className="blog-card-title">{b.title}</CardTitle>
                                </Link>
                                <CardText className="blog-card-text">
                                    {b.content.substring(0, 100)}...
                                </CardText>
                                <CardText>
                                    <small className="text-muted">
                                        Posted on: {new Date(b.postDate).toLocaleDateString()}
                                    </small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
