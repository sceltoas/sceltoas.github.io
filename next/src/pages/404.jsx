import React, {Fragment} from 'react';
import Navigation from '../components/Navigation';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import Footer from '../components/Footer';
import NavigationImage from '../images/navigation.jpeg';
import FullPageImageWithHeader from '../components/FullPageImageWithHeader';
import CountUp from 'react-countup';

const NotFoundPage = () => (
  <Fragment>
    <Helmet
      title="Scelto AS"
      meta={[
        {name: 'description', content: 'Sample'},
        {name: 'keywords', content: 'sample, something'},
      ]}
      link={[{rel: 'icon', href: Favicon}]}
    />
    <Navigation />
    <FullPageImageWithHeader
      title={<CountUp suffix="&nbsp;NOT FOUND" end={404} duration={1} />}
      subtitle="You just hit a route that doesn&#39;t exist... the sadness."
      image={NavigationImage}
    />
    <Footer />
  </Fragment>
);

export default NotFoundPage;
