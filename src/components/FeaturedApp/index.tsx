import React from 'react';

import {
  Background, Container, InfoContainer, Logo, Title,
} from './styles';

const FeaturedApp: React.FC = function () {
  return (
    <Container>
      <Background />
      <InfoContainer>
        <Logo src="https://logodownload.org/wp-content/uploads/2013/12/gta-v-logo.png" />
        <Title>Grand Theft Auto V</Title>
        <p>
          Grand Theft Auto V é um jogo eletrônico de ação-aventura
          desenvolvido pela Rockstar North e publicado pela Rockstar Games.
        </p>
      </InfoContainer>
    </Container>
  );
};

export default FeaturedApp;
