import React, {Fragment} from 'react';
import DL from '../../images/tor_eric_crop.jpg';
import Section from '../../components/Section';
import HeaderImage from '../../images/direction-scelto.jpeg';
import SalaryCalculator from '../../components/SalaryCalculator';
import Helmet from 'react-helmet';
import Favicon from '../../images/favicon.png';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';

import './index.less';
import {createMetadata} from '../../utils';

const IndexPage = () => (
  <Fragment>
    <Helmet
      title="Scelto AS"
      meta={createMetadata ({
        title: 'I Scelto er de ansatte ansiktet utad og selve merkevaren. Du er en hyggelig, dyktig og erfaren Java-utvikler, .NET-utvikler, eller teknisk arkitekt.',
        description: 'Det vet vi å sette pris på med blant annet en svært god sosial kalender, gode forsikringer, godt miljø og ikke minst en av bransjens beste lønnsbetingelser.',
        image: HeaderImage,
      })}
      link={[{rel: 'icon', href: Favicon}]}
    />
    <Navigation />
    <div className="why-work-at-scelto">
      <Section dark>
        <SalaryCalculator />
      </Section>

      <Section dark>
        <div style={{textAlign: 'center'}}>
          <img
            alt="Tor-Eric Sandvik - Daglig leder"
            style={{
              margin: '50px 0 0 0',
              borderRadius: '50%',
              width: '200px',
            }}
            src={DL}
          />
          <h5>
            Ring meg for en uforpliktende prat på tlf
            {' '}
            <a className="sc-link" href="tlf:90 96 90 97">
              90&nbsp;96&nbsp;90&nbsp;97
            </a>
            .
            {' '}
          </h5>
          <h5>
            Eller ta kontakt på mail
            {' '}
            <a className="sc-link" href="mailto:tor.erik@scelto.no">
              tor.eric@scelto.no
            </a>
          </h5>
        </div>
      </Section>
    </div>
    <Footer />
  </Fragment>
);

export default IndexPage;
