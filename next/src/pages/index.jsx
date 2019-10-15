import React, {Fragment} from 'react';
import {graphql} from 'gatsby';
import EmployeeImageLink from '../components/EmployeeImageLink';
import SystemutviklingIcon from '../images/icons/Scelto–illustration-systemutvikling-dark-bg-tjenester.svg';
import ArkitekturIcon from '../images/icons/Scelto–illustration-arkitektur-dark-bg-frontpage.svg';
import Section from '../components/Section';
import IconTitleAndIntroLink from '../components/IconTitleAndIntroLink';
import FullPageImageWithHeader from '../components/FullPageImageWithHeader';
import Employees from '../images/man-headphones-working.jpeg';
import DefaultEmployeeImage from '../images/mugshots/loading.jpg';
import {ansatte} from '../ansatte';
import Fade from 'react-reveal/Fade';
import Navigation from '../components/Navigation';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import Footer from '../components/Footer';
import {LightButton, DarkButton} from '../components/Button';
import {createMetadata} from '../utils';

import '../layouts/scelto.less';

const ListOfEmployees = ({props}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      }}
    >
      {Object.keys(ansatte)
        .sort()
        .slice(0, 3)
        .map((key, index) => {
          const {name, title} = ansatte[key];
          const image = props.data.EmployeeImages.edges.find(
            node => node.node.name === key
          );
          return (
            <EmployeeImageLink
              key={index}
              image={
                (image && image.node.childImageSharp.fluid.src) ||
                DefaultEmployeeImage
              }
              name={name}
              title={title}
              to={`/ansatte/${key}`}
            />
          );
        })}
    </div>
  );
};

export const query = graphql`
  query {
    EmployeeImages: allFile(
      sort: {order: ASC, fields: [absolutePath]}
      filter: {relativePath: {regex: "/mugshots/.*.jpg/"}}
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = props => {
  console.log(props);

  return (
    <Fragment>
      <Helmet
        title="Scelto AS"
        meta={createMetadata({
          title:
            'En lagspiller, lett å samarbeid med, og et positivt bidrag til et hvert miljø.',
          description:
            'Scelto leverer senior- og ekspertkompetanse innen systemutvikling og teknisk arkitektur på både Java og .Net.',
          image: Employees,
        })}
        link={[{rel: 'icon', href: Favicon}]}
      />
      <Navigation />
      <FullPageImageWithHeader
        title={`Tunge på kunnskap. Lette å samarbeide med.`}
        subtitle="Vi har lang erfaring med å bistå alle type bedrifter innen systemutvikling og teknisk arkitektur med å bygge innovative og strategisk gode løsninger."
        link="#whoarewe"
        image={Employees}
      />

      {/* <TextWithPadding
        id="whoarewe"
      text={`Vi har lang erfaring med å bistå alle type bedrifter innen systemutvikling og teknisk arkitektur med å bygge innovative og strategisk gode løsninger.`}
      />

      <Parallax bgImage={Image}>
        <Fade><CenteredText text="Scawesomeness delivered!" /></Fade>
      </Parallax>
 */}
      <Section
        title="Hva kjennetegner en Scelto-konsulent?"
        ingress={
          <React.Fragment>
            <p>
              Vi er en gruppe positive og kunnskapsrike mennesker som bruker vår
              ekspertise for at din bedrift skal kunne yte best mulig. Våre
              konsulenters evne til å samarbeide tett med våre kunder og
              kolleger gjør at alle våre tjenester og produkter blir
              skreddersydd etter kundens ønske.
            </p>
            <p>
              Se alle våre konsulenters biografi for mer utdypende informasjon
              om vår kompetanse!
            </p>
          </React.Fragment>
        }
      >
        <ListOfEmployees props={props} />
        <div className="sc-button-container">
          <DarkButton to="/ansatte">Se alle konsulentene</DarkButton>
        </div>
      </Section>

      <Section
        dark={true}
        title="Hva gjør vi?"
        ingress="Scelto tilbyr konsulentutleie innen systemutvikling og teknisk arkitektur. Alle konsulentene hos oss er seniorprofiler med bred teknisk og forretningsmessig erfaring."
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
          }}
        >
          <Fade>
            <IconTitleAndIntroLink
              icon={SystemutviklingIcon}
              title="Systemutvikling"
              intro="Systemutviklerne i Scelto har et høyt kompetansenivå på de fleste
                            områder innen
                            utvikling og metodikk."
            />
          </Fade>
          <Fade>
            <IconTitleAndIntroLink
              icon={ArkitekturIcon}
              title="Teknisk arkitektur"
              intro="Hyggelige og dyktige tekniske arkitekter med bred kompetanse fra en rekke større og mindre systemer"
            />
          </Fade>
        </div>
        <div className="sc-button-container">
          <LightButton to="/tjenester">Les mer om våre tjenester</LightButton>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
};

export default IndexPage;
