import React from 'react';

import { Container } from './styles';
import NavBar from '../../components/NavBar';
import ImageOverTextBanner from '../../components/ImageOverTextBanner';
import Footer from '../../components/Footer';
import SectionGrey from '../../components/SectionGrey';
import MagazineCard from '../../components/MagazineCard';

import Brand from '../../assets/img/marca-revista-em-rede.svg';
import Logo from '../../assets/img/logo_ufmt_negativo_Prancheta.svg';
import UniRedeLogo from '../../assets/img/logo-unirede-horizontal.svg';
import { ReactComponent as Book } from '../../assets/img/logo-revista.svg';
import Banner from '../../assets/img/ufmt-library-photo-1600.jpg';

const Footerlogos = [Brand, UniRedeLogo];
const magazines = [
  '2019 - v.6 n.2',
  '2019 - v.6 n.1',
  '2018 - v.5 n.3',
  '2018 - v.5 n.2',
  '2018 - v.5 n.1',
  '2017 - v.4 n.2',
];

export default function Main() {
  return (
    <Container>
      <NavBar brandImage={Brand} brandText="" />
      <ImageOverTextBanner />
      <SectionGrey Icon={Book} />

      <div className="container-fluid">
        <div className="row">
          {magazines.map(magazine => {
            return (
              <div className="col-md-2">
                <MagazineCard title={magazine} />
              </div>
            );
          })}
        </div>
      </div>
      <Footer logos={Footerlogos} />
    </Container>
  );
}
