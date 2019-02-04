import React, {Fragment} from 'react';
import EmployeeImageLink from '../../components/EmployeeImageLink';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import SmartPeople from '../../images/smart-people.jpg';
import {ansatte} from '../../ansatte';
import Favicon from '../../images/favicon.png';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer';

const IndexPage = () => (
  <Fragment>
    <Helmet
      title="Ansatte i Scelto AS"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
      link={[{rel: 'icon', href: Favicon}]}
    />
    <Navigation />
    <FullPageImageWithHeader
      image={SmartPeople}
      title="Det er de ansatte som utgjør Scelto"
      subtitle="Menneskene i Scelto kjennetegnes ved mer enn bare sin faglig styrke og senior erfaring. En Sceltoer er også fremoverlent, nysgjerrig og aldri redd for å bidra med sin synsvinkel."
      link="#ansatte"
    />

    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        margin: '100px 50px 0',
      }}
    >
      {Object.keys (ansatte).sort ().map (key => {
        const {image, name, title} = ansatte[key];
        return (
          <EmployeeImageLink
            style={{}}
            image={image}
            name={name}
            title={title}
            to={`/ansatte/${key}`}
          />
        );
      })}
    </div>
    <Footer />
  </Fragment>
);

export default IndexPage;
