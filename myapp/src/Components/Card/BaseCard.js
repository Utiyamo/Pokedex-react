import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const BaseCard = ({ title, subtitle, description, link }) => {
    return (
        <Card style={{ width: '100%', height: '25vh' }}>
            <Link to={link} style={{ textDecoration: 'none' }} >
                <Card.Body className="text-dark">
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}