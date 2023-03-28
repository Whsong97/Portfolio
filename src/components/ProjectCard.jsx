import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProjectCard(props) {


    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    <Button variant="primary">{props.button}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProjectCard;