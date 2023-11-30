import { Card, CardBody, Col, Container, Media, Row } from "reactstrap";
import { userData } from "../data/Data";
import "./UserProfile.css"

export default function UserProfile() {
    return (
        <Container className="user-profile-view py-5">
            {userData && (
                <Row>
                    <Col md={11} className="text-center">
                        <Media object src={userData.profilePic} alt="Profile Picture" className="profile-pic" />
                    </Col>
                    <Col md={15}>
                        <Card className="profile-card">
                            <CardBody>
                                <h1 className="profile-name">{userData.name}</h1>
                                <p className="profile-bio">{userData.bio}</p>
                                <p className="profile-detail">Email: {userData.email}</p>
                                <p className="profile-detail">Phone: {userData.phoneNumber}</p>
                                <p className="profile-detail">LinkedIn: <a href={userData.linkedIn} target="_blank" rel="noopener noreferrer">{userData.linkedIn}</a></p>
                                <p className="profile-detail">GitHub: <a href={userData.githHub} target="_blank" rel="noopener noreferrer">{userData.githHub}</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )}
        </Container>
    )
}