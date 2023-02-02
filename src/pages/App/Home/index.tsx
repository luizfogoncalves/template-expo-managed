import React from 'react';
import { Card } from '../../../components';

import { Container, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>
          Hello World
        </Title>
      </Card>
    </Container>
  );
}

export default Home;