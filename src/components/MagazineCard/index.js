import React from 'react';

import { Container, CardImage, CardBody, CardTitle, Button } from './styles';

export default function MagazineCard(props) {
  const { title = '' } = props;
  return (
    <Container>
      <CardImage />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <Button>Acessar Revista</Button>
      </CardBody>
    </Container>
  );
}
