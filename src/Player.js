import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ 
  name = "Unknown Player", 
  team = "No Team", 
  nationality = "Unknown", 
  jerseyNumber = 0, 
  age = 0, 
  imageURL = "https://via.placeholder.com/150" 
}) => {
  return (
    <Card style={{ 
      width: '18rem', 
      margin: '10px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    }}
    className="hover-effect"
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Card.Img variant="top" src={imageURL} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}<br />
          <strong>Nationality:</strong> {nationality}<br />
          <strong>Jersey Number:</strong> {jerseyNumber}<br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
