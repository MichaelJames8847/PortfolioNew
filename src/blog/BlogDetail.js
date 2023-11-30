import { Badge, Card, CardBody, CardText, CardTitle, Container, Media } from "reactstrap";
import { blogs, categories, interests } from "../data/Data";

export default function BlogDetail() {

    const getCategoryName = (categoryIds) => {
        return categories.filter(category => categoryIds.includes(category.id)).map(category => category.categoryName);
    };

    const getInterestName = (interestIds) => {
        return interests.filter(interest => interestIds.includes(interest.id)).map(interest => interest.name);
    };
    
    return (
        <Container className="blog-detail-container py-5">
          {blogs.map((blog) => (
            <Card key={blog.id}>
                <CardBody>
                    <CardTitle tag="h3">{blog.title}</CardTitle>
                    {blog.image && <Media src={blog.image} alt={blog.title} className="blog-image mb-3" />}
                    <CardText>{blog.content}</CardText>
                    <CardText>
                        <small className="text-muted">Posted on: {new Date(blog.postDate).toLocaleDateString()}</small>
                    </CardText>
                    <div className="blog-categories">
                        {getCategoryName(blog.categories).map((name, index) => (
                            <Badge key={index} color="primary" className="mr-2">{name}</Badge>
                        ))}
                    </div>
                    <div className="blog-interests mt-3">
                        {getInterestName(blog.interests).map((name, index) => (
                            <Badge key={index} color="secondary" className="mr-2">{name}</Badge>
                        ))}
                    </div>
                </CardBody>
            </Card>
          ))}
        </Container>
    )
}