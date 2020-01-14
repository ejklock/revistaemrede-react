import React from 'react';

import { Container, TextContainer } from './styles';

export default function ImageOverTextBanner(props) {
  const { image = '' } = props;
  return (
    <Container image={image}>
      <TextContainer />
    </Container>
  );
}
