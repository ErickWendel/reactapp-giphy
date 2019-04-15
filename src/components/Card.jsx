import React from 'react'
import { Card, Button, Container, Col, Row } from 'react-bootstrap';

const CardComponent = ({ gifs }) => {

      const cards = gifs.map(item => (
          <Col md={4} key={item.id}>
            <Card  style={{ width: '100%' }}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button onClick={() => window.open(item.source, "_blank")} variant="primary">Full Gif</Button>
            </Card.Body>
            </Card>
          </Col>
      )
    )
  

  return <Container fluid={true}><Row>{cards}</Row></Container>
}

export default  CardComponent