import React, {Fragment} from 'react';
import SectionWithIcon from '../components/SectionWithIcon';
import FullPageImageWithHeader from '../components/FullPageImageWithHeader';
import Navigation from '../components/Navigation';
import Puzzle from '../images/puzzle.jpeg';
import Systemutvikling
  from '../images/icons/Scelto–illustration-systemutvikling-light-bg-tjenester.svg';
import Arkitektur
  from '../images/icons/Scelto–illustration-arkitektur-dark-bg-big-tjenester.svg';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import Footer from '../components/Footer';
import TextWithCircle from '../components/TextWithCircle';
import {createMetadata} from '../utils';

const IndexPage = () => (
  <Fragment>
    <Helmet
      title="Scelto AS"
      meta={createMetadata ({
        title: 'Scelto tilbyr ekspertkonsulenter innen systemutvikling og teknisk arkitektur',
        image: Puzzle,
      })}
      link={[{rel: 'icon', href: Favicon}]}
    />
    <Navigation />
    <FullPageImageWithHeader
      image={Puzzle}
      title={
        <span>
          Scelto tilbyr ekspertkonsulenter innen
          {' '}
          <a
            className="sc-link"
            href="#systemutvikling"
            alt="Naviger til systemutvikling"
          >
            systemutvikling
          </a>
          {' '}
          og
          {' '}
          <a
            className="sc-link"
            href="#teknisk-arkitektur"
            alt="Naviger til teknisk arkitektur"
          >
            teknisk arkitektur
          </a>
        </span>
      }
      link="#systemutvikling"
    />
    <SectionWithIcon
      id="systemutvikling"
      title="Systemutvikling"
      ingress="Systemutviklerne i Scelto har et høyt kompetansenivå på de fleste områder innen utvikling og metodikk - enten det gjelder frontend-utvikling med interaksjonsdesign, eller backend-utvikling på både Java- og .NET-plattform. Våre konsulenter har ofte teknisk ansvar eller teamansvar i kombinasjon med utviklerrollen."
      icon={Systemutvikling}
    >
      <TextWithCircle>Frontend</TextWithCircle>
      <TextWithCircle>Full stack</TextWithCircle>
      <TextWithCircle>DevOps</TextWithCircle>
    </SectionWithIcon>
    <SectionWithIcon
      dark={true}
      title="Teknisk arkitektur"
      ingress="Vi i Scelto har bred erfaring med utredning og implementasjon av applikasjon/teknisk arkitektur. Fra integrasjonsapplikasjoner til isolerte applikasjoner på tvers av teknologier og plattformer kan våre arkitekter hjelpe deg å velge riktig tekniske løsninger, praksister og metoder for et vellykket prosjekt. Vi vet at gjennomføring ikke bare handler om teknologi, men like mye om kommunikasjon mellom mennesker."
      icon={Arkitektur}
      id="teknisk-arkitektur"
    >
      <TextWithCircle>Webarkitektur</TextWithCircle>
      <TextWithCircle>Micro Services</TextWithCircle>
      <TextWithCircle>Cloud Architecture</TextWithCircle>
    </SectionWithIcon>
    <Footer />
  </Fragment>
);

export default IndexPage;
