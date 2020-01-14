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

export default function Main() {
  return (
    <Container>
      <NavBar brandImage={Brand} brandText="" />
      <ImageOverTextBanner />
      <SectionGrey Icon={Book} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <MagazineCard />
          </div>
          <div className="col-md-2">
            <MagazineCard />
          </div>
          <div className="col-md-2">
            <MagazineCard />
          </div>
          <div className="col-md-2">
            <MagazineCard />
          </div>
          <div className="col-md-2">
            <MagazineCard />
          </div>
          <div className="col-md-2">
            <MagazineCard />
          </div>
        </div>
      </div>
      <Footer logos={Footerlogos} />
    </Container>
  );
}
