import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';

const CustomCard = ({ imgUrl, title, body }) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Function to update isSmallScreen state based on viewport width
  const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust threshold as needed for mobile size
  };

  useEffect(() => {
      // Update isSmallScreen state on component mount and window resize
      updateScreenSize(); // Initial call to set initial state
      window.addEventListener('resize', updateScreenSize); // Add event listener for window resize
      return () => {
          window.removeEventListener('resize', updateScreenSize); // Remove event listener on component unmount
      };
  }, []); 

  return (
    <Col md={12} className="mb-3">
      <Card className="shadow">
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title className='text-center mt-2 mb-3' style={{ color: '#58c459', fontWeight: '600', fontSize: '27px' }}>{title}</Card.Title>
          <Card.Text className='m-3' style={{ fontSize: isSmallScreen ? '12px' : '17px' }}>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCard;
