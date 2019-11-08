import React, { Fragment } from 'react';
import SectionWithIcon from '../../components/SectionWithIcon';
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader';
import Navigation from '../../components/Navigation';
import Puzzle from '../../images/puzzle.jpeg';
import Systemutvikling from '../../images/icons/Scelto–illustration-systemutvikling-light-bg-tjenester.svg';
import Arkitektur from '../../images/icons/Scelto–illustration-arkitektur-dark-bg-big-tjenester.svg';
import Helmet from 'react-helmet';
import Favicon from '../../images/favicon.png';
import Footer from '../../components/Footer';
import TextWithCircle from '../../components/TextWithCircle';
import { createMetadata } from '../../utils';
import HeaderWithPadding from '../../components/HeaderWithPadding';
import Section from '../../components/Section';
import { getScores } from './scuppen';
import './scuppen.less';

const IndexPage = () => (
    <Fragment>
        <Helmet
            title="Scelto AS"
            meta={createMetadata({
                title:
                    'Scelto tilbyr ekspertkonsulenter innen systemutvikling og teknisk arkitektur',
                image: Puzzle,
            })}
            link={[{ rel: 'icon', href: Favicon }]}
        />
        <Navigation />
        <Section dark title="Scuppen 2019" className="scuppen-scores">
            <table
                cellPadding="0"
                cellSpacing="0"
                className="scuppen-scores__table"
            >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Sceltoer</th>
                        <th>Resultater</th>
                        <th>Tellende poengsum</th>
                        <th>Total poengsum</th>
                    </tr>
                </thead>
                <tbody id="results-table">
                    {getScores().map((score, index) => {
                        console.log(score);
                        return (
                            <tr class="scuppen-scores-entry">
                                <td>{index + 1}</td>
                                <td>{score.name}</td>
                                <td>{score.resultList}</td>
                                <td>{score.countingScore}</td>
                                <td style={{ opacity: '.5' }}>{score.score}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p style={{ fontSize: '0.6em' }}>D=Deltatt, F=Feilet i å møte</p>
            <p class="small">
                Resultat etter 5 runder. Tellende poengsum er etter at de to
                dårligste resultatene strykes.
            </p>
        </Section>
        <Footer />
    </Fragment>
);

export default IndexPage;
