import React, {Fragment} from 'react';
import EmployeeImageLink from '../../components/EmployeeImageLink';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import SmartPeople from '../../images/smart-people.jpg';
import {ansatte} from '../../ansatte';
import Favicon from '../../images/favicon.png';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer';
import DefaultEmployeeImage from '../../images/mugshots/loading.jpg';
import {createMetadata} from '../../utils';
import {graphql} from 'gatsby';

const IndexPage = props => {
  return (
    <Fragment>
      <Helmet
        title="Ansatte i Scelto AS"
        meta={[
          createMetadata ({
            title: 'Det er de ansatte som utgjør Scelto',
            description: 'Menneskene i Scelto kjennetegnes ved mer enn bare sin faglig styrke og senior erfaring. En Sceltoer er også fremoverlent, nysgjerrig og aldri redd for å bidra med sin synsvinkel.',
            image: SmartPeople,
          }),
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
          margin: '50px 20px 0',
        }}
      >
        {Object.keys (ansatte).sort ().map (key => {
          const {name, title} = ansatte[key];
          const image = props.data.EmployeeImages.edges.find (
            node => node.node.name === key
          );

          return (
            <EmployeeImageLink
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
      <Footer />
    </Fragment>
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
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
