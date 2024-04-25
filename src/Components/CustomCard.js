import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CustomCard = ({ imgUrl, title, body }) => {

  return (
    <Col md={12} className="mb-3">
      <Card className="shadow">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title className='text-center mt-2 mb-3' style={{ color: '#58c459', fontWeight: '600', fontSize: '27px' }}>{title}</Card.Title>
          <Card.Text className='m-3' style={{fontSize: '17px'}}>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;
