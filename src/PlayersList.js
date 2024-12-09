import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  return (
    <Container>
      <h1 className="text-center my-4">FIFA Player Cards</h1>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={3} sm={6} xs={12}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
