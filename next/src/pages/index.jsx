import React, {Fragment} from 'react';
import {graphql} from 'gatsby';
import TextWithPadding from '../components/HeaderWithPadding';
import EmployeeImageLink from '../components/EmployeeImageLink';
import Image from '../images/startup-photos.jpg';
import SystemutviklingIcon
  from '../images/icons/Scelto–illustration-systemutvikling-dark-bg-tjenester.svg';
import ArkitekturIcon
  from '../images/icons/Scelto–illustration-arkitektur-dark-bg-frontpage.svg';
import Section from '../components/Section';
import IconTitleAndIntroLink from '../components/IconTitleAndIntroLink';
import FullPageImageWithHeader from '../components/FullPageImageWithHeader';
import Employees from '../images/man-headphones-working.jpeg';
import DefaultEmployeeImage from '../images/mugshots/loading.jpg';
import {ansatte} from '../ansatte';
import CenteredText from '../components/CenteredText';
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';
import '../layouts/scelto.less';
import Navigation from '../components/Navigation';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import Footer from '../components/Footer';
import {LightButton, DarkButton} from '../components/Button';
import {createMetadata} from '../utils';

const ListOfEmployees = ({props}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      }}
    >
      {Object.keys (ansatte).sort ().slice (0, 3).map ((key, index) => {
        const {name, title} = ansatte[key];
        const image = props.data.EmployeeImages.edges.find (
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
    EmployeeImages: allFile(sort: {order: ASC, fields: [absolutePath]}, filter: {relativePath: {regex: "/mugshots/.*.jpg/"}}) {
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
  console.log (props);

  return (
    <Fragment>
      <Helmet
        title="Scelto AS"
        meta={createMetadata ({
          title: 'En lagspiller, lett å samarbeid med, og et positivt bidrag til et hvert miljø.',
          description: 'Scelto leverer senior- og ekspertkompetanse innen systemutvikling og teknisk arkitektur på både Java og .Net.',
          image: Employees,
        })}
        link={[{rel: 'icon', href: Favicon}]}
      />
      <Navigation />
      <FullPageImageWithHeader
        title={`En lagspiller, lett å samarbeid med, og et positivt bidrag til et hvert miljø.`}
        subtitle="Scelto leverer senior- og ekspertkompetanse innen systemutvikling og teknisk arkitektur på både Java og .Net."
        link="#whoarewe"
        image={Employees}
      />

      <TextWithPadding
        id="whoarewe"
        text={`Scelto teller ${Object.keys (ansatte).length} personer og det jobbes aktivt for å rekruttere de beste innenfor våre fagfelt. Menneskene som jobber i Scelto kjennetegnes ved mer enn bare sin faglige styrke og senior erfaring, en Scelto-er en lagspiller, lett å samarbeide med, og et positivt bidrag til et hvert miljø.`}
      />

      <Parallax bgImage={Image}>
        <Fade><CenteredText text="Scawesomeness delivered!" /></Fade>
      </Parallax>

      <Section
        title="Hvem er en Sceltoer?"
        ingress="Menneskene i Scelto kjennetegnes ved mer enn bare sin faglig styrke og senior erfaring. En Sceltoer er også fremoverlent, nysgjerrig og aldri redd for å bidra med sin synsvinkel."
      >
        <ListOfEmployees props={props} />
        <div className="sc-button-container">
          <DarkButton to="/ansatte">Se alle sceltoerne</DarkButton>
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
              title="Teknisk Arkitektur"
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
