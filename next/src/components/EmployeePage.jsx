import React, {Fragment} from 'react';
import EmployeeIntroWithImage from './EmployeeIntroWithImage';
import Navigation from './Navigation';
import Section from './Section';
import {ansatte} from '../ansatte';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import CenteredText from './CenteredText';
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';
import Footer from './Footer';
import {LightButton} from './Button';

const currentOrigin = typeof window !== `undefined`
  ? window.location.origin
  : 'https://scelto.no';

const EmployeePage = props => {
  const name = props.location.pathname
    .replace ('/ansatte/', '')
    .replace ('/', '');

  const employee = ansatte[name];
  console.log (Object.keys (ansatte).length);
  if (!employee) {
    console.log ('Could not find ansatt', name);
    return null;
  }

  return (
    <Fragment>
      <Helmet
        title={`${employee.name} jobber i Scelto AS`}
        meta={[
          {name: 'description', content: employee.ingress},
          {name: 'og:title', content: `${employee.name} jobber i Scelto AS`},
          {name: 'og:description', content: employee.ingress},
          {
            name: 'og:image',
            content: `${currentOrigin}${employee.image}`,
          },
          {name: 'og:url', content: `${currentOrigin}/ansatte/${name}`},
        ]}
        link={[{rel: 'icon', href: Favicon}]}
      />
      <Navigation />
      <Section dark={true}>
        <Fade><EmployeeIntroWithImage employee={employee} /></Fade>
      </Section>

      <Section
        style={{
          background: '#666664',
          color: '#fff',
        }}
        title={`${employee.firstName} sine scills`}
        ingress={employee.ingress}
      >
        {employee.mainSection &&
          employee.mainSection.length > 1 &&
          employee.mainSection.map (section => (
            <Fade>
              <p>{section}</p>
            </Fade>
          ))}
        <div className="sc-button-container">
          <LightButton
            href={employee.linkToCV}
          >{`Last ned ${employee.firstName} sin CV`}</LightButton>
        </div>
      </Section>
      <Parallax bgImage={employee.customImage}>
        <CenteredText fullpage text={`${employee.firstName} er scawesome!`} />
      </Parallax>
      <Footer />
    </Fragment>
  );
};

export default EmployeePage;
