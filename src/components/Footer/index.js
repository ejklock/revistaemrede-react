import React from 'react';

import { Container } from './styles';

export default function Footer(props) {
  const { logos = [] } = props;
  return (
    <Container>
      <footer>
        {logos.map(logo => {
          return <img src={logo} alt="Logo da UFMT" />;
        })}

        <p>
          Av. Fernando Corrêa da Costa, nº 2367 - Bairro Boa Esperança. Cuiabá -
          MT - 78060-900 Funcionamento administrativo das 7h30 às 11h30 e das
          13h30 às 17h30
        </p>
      </footer>
    </Container>
  );
}
