import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import DL from '../../images/tor_eric_crop.jpg'
import Section from '../../components/Section'
import HeaderImage from '../../images/direction-scelto.jpeg'
import Helmet from 'react-helmet'
import Favicon from '../../images/favicon.png'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import FullPageImageWithHeader from '../../components/FullPageImageWithHeader'
import { kunder } from '../../kunder'
import './index.less'

const IndexPage = () => (
    <Fragment>
        <Helmet
            title="Scelto AS"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
            link={[{ rel: 'icon', href: Favicon }]}
        />
        <Navigation />
        <FullPageImageWithHeader
            image={HeaderImage}
            title="Scelto er en arbeidsplass hvor både det faglige og sosiale står i fokus."
        />
        <Section dark>
            <h5>
                Vi jobber med noen av Norges mest spennende bedrifter og
                organisasjoner, og vi er alltid på jakt etter nye mennesker som
                kan være med å utvikle både selskapet og hverandre som
                mennesker.
            </h5>
            <h5>
                Vi mener det sosiale danner grunnlaget for et godt arbeidsmiljø,
                og derfor samles vi ofte gjennom året for blant annet turer
                innen- og utlands, møtes til en hyggelig lunsj, har
                Scelto-kvelder med aktiviteter, sommerfest og julebord, og i det
                hele tatt gjør ting sammen for å bli bedre kjent med hverandre.
            </h5>
        </Section>
        <Section ingress="Attraktive og spennende kunder">
            <div className="kunder">
                {kunder.map(kunde => (
                    <img className="icon" alt={kunde.name} src={kunde.icon} />
                ))}
            </div>
        </Section>
        <div className="why-work-at-scelto">
            <Section title="Hvorfor jobbe i Scelto?">
                <ul className="list">
                    <li>
                        Positive og hyggelige mennesker som hjelper hverandre.
                    </li>
                    <li>
                        Attraktive og spennende kunder, som bla. NRK,
                        Skatteetaten og Statens vegvesen.
                    </li>
                    <li>
                        Miljø med faglig tyngde – I Scelto er
                        gjennomsnittserfaringen 12 år.
                    </li>
                    <li>
                        Gode betingelser{' '}
                        <Link to="/lonnskalkulator">
                            <span role="img" aria-label="Open terms">
                                🔢
                            </span>
                        </Link>
                    </li>
                    <li>
                        Fokus på sosial kalender:
                        <ul className="nested-list">
                            <li>
                                Vårtur på fjellet i eksklusiv hytte med kokk
                            </li>
                            <li>Sommerfest med følge</li>
                            <li>Høsttur til storby med Michelin-stjerner</li>
                            <li>Julebord på en bedre restaurant</li>
                            <li>Månedlig felles lunsj</li>
                            <li>Kvartalsvis Sceltokveld med aktivitet</li>
                        </ul>
                    </li>
                    <li>
                        Og sist, men ikke minst, vi skal ikke bli flere enn 30
                        personer og vi skal være et lett selskap med lite
                        overhead. Noe som gjør at vi kan fortsette å ha fokus på
                        kulturen, det sosiale og deg som individ.
                    </li>
                </ul>
            </Section>
            <Section className="forsikringsordning__wrapper">
                <h3>Gode forsikringsordninger</h3>
                <div className="forsikringsordning">
                    <div className="forsikringsordning__column">
                        <p className="forsikringsordning__entry">
                            Fritidsulykke
                        </p>
                        <p className="forsikringsordning__entry">Yrkesskade</p>
                        <p className="forsikringsordning__entry">
                            Reise til og fra arbeid
                        </p>
                        <p className="forsikringsordning__entry">
                            Invaliditet og uførhet pga. sykdom
                        </p>
                    </div>
                    <div className="forsikringsordning__column">
                        <p className="forsikringsordning__entry">
                            Helseforsikring Super
                        </p>
                        <p className="forsikringsordning__entry">
                            Reiseforsikring Super
                        </p>
                        <p className="forsikringsordning__entry">
                            Familiemedlemskap i Volvat
                        </p>
                    </div>
                </div>
            </Section>
            <Section dark>
                <div style={{ textAlign: 'center' }}>
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
                        Ring meg for en uforpliktende prat på tlf{' '}
                        <a className="sc-link" href="tlf:90 96 90 97">
                            90&nbsp;96&nbsp;90&nbsp;97
                        </a>
                        .{' '}
                    </h5>
                    <h5>
                        Eller ta kontakt på mail{' '}
                        <a className="sc-link" href="mailto:tor.erik@scelto.no">
                            tor.eric@scelto.no
                        </a>
                    </h5>
                </div>
            </Section>
        </div>
        <Footer />
    </Fragment>
)

export default IndexPage
