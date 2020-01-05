import React, { Fragment } from 'react';
import EmployeeImageLink from '../../components/EmployeeImageLink';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import SmartPeople from '../../images/smart-people.jpg';
import { ansatteArray } from '../../ansatte';
import { showAvailableConsultantsFirst } from '../../utils';
import Favicon from '../../images/favicon.png';
import Helmet from 'react-helmet';
import Footer from '../../components/Footer';
import { createMetadata } from '../../utils';
import { graphql } from 'gatsby';
import DefaultEmployeeImage from '../../images/mugshots/no-pic-yet.jpg';

const IndexPage = props => {
    const title = 'Hva kjennetegner en Scelto-konsulent?';
    const description =
        'Vi er en gruppe positive og kunnskapsrike mennesker som bruker vår ekspertise for at din bedrift skal kunne yte best mulig. Våre konsulenters evne til å samarbeide tett med våre kunder og kolleger gjør at alle våre tjenester og produkter blir skreddersydd etter kundens ønske.';
    return (
        <Fragment>
            <Helmet
                title="Ansatte i Scelto AS"
                meta={createMetadata({
                    title,
                    description,
                    image: SmartPeople,
                })}
                link={[{ rel: 'icon', href: Favicon }]}
            />
            <Navigation />
            <FullPageImageWithHeader
                image={SmartPeople}
                title={title}
                subtitle={description}
                link="#ansatte"
            >
                <h5>
                    Se alle våre konsulenters biografi for mer utdypende
                    informasjon om vår kompetanse!
                </h5>
            </FullPageImageWithHeader>

            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    margin: '50px 20px 0',
                }}
            >
                {ansatteArray()
                    .sort(showAvailableConsultantsFirst)
                    .map(({ name, title, key }) => {
                        const image = props.data.EmployeeImages.edges.find(
                            node => node.node.name === key
                        );

                        return (
                            <EmployeeImageLink
                                key={key}
                                image={
                                    (image &&
                                        image.node.childImageSharp.fluid.src) ||
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
        EmployeeImages: allFile(
            sort: { order: ASC, fields: [absolutePath] }
            filter: { relativePath: { regex: "/mugshots/.*.jpg/" } }
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

export default IndexPage;
