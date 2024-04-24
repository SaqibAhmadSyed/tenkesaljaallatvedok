import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ imgUrl, title,  body, direction }) => {
  const isRtl = direction === 'rtl';
  const rowClass = isRtl ? 'flex-row-reverse' : '';

  return (
    <Card className="shadow mb-5">
      <div className={`row no-gutters ${rowClass}`}>
        <div className="col-md-4">
          <Card.Img variant="top" src={imgUrl} />
        </div>
        <div className="col-md-8">
            <Card.Title className='text-center p-4 mt-2'  style={{ color: '#58c459', fontWeight: '600', fontSize:'32px' }}>{title}</Card.Title>
          <Card.Body>
            <p><br></br>{body}</p>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default CustomCard;
