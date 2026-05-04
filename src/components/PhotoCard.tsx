import Card from 'react-bootstrap/Card';

function PhotoCard({img, title, body }: {img:string, title:string, body:string}){
    return (
        <Card style={{ 
            width: '18rem',
            padding: '20px',
            margin: '20px'
            }} bg='dark' text='light' >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default PhotoCard;