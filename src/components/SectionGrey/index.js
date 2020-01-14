import React from 'react';

import { Container, SectionIcon } from './styles';

export default function SectionGrey(props) {
  const { Icon } = props;
  return (
    <Container>
      <SectionIcon>
        <h1>A REVISTA</h1>
        <Icon />
      </SectionIcon>
      <p>
        A revista <strong>EmRede</strong> – Revista de Educação a Distância
        (ISSN online: 2359-6082) – criada em 2014, é uma publicação mantida pela
        Associação Universidade em Rede (UniRede), em parceria com pesquisadores
        e universidades do país e do exterior e, tem como objetivo publicar
        trabalhos de excelência elaborados por profissionais da área de Educação
        a Distância, buscando fomentar a pesquisa e o desenvolvimento pedagógico
        e tecnológico no contexto da educação a distância e da educação apoiada
        pelas novas tecnologias digitais.
      </p>
    </Container>
  );
}
