import React, { Fragment } from 'react';
import FullPageImageWithContent from '../components/FullPageImageWithContent';
import Navigation from '../components/Navigation';
import InlineInput from '../components/InlineInput';
import Working from '../images/contact.jpg';
import Helmet from 'react-helmet';
import Favicon from '../images/favicon.png';
import Footer from '../components/Footer';
import styles from './kontakt.module.less';
import DL from '../images/tor_eric_crop.jpg';
import { LightButton } from '../components/Button';
import Fade from 'react-reveal/Fade';
import { createMetadata } from '../utils';

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', number: '' };
        this.onPhoneChanged = this.onPhoneChanged.bind(this);
        this.onNameChanged = this.onNameChanged.bind(this);
    }
    onNameChanged(event) {
        this.setState({ ...this.state, name: event.target.value });
    }
    onPhoneChanged(event) {
        this.setState({ ...this.state, number: event.target.value });
    }
    sendMail = event => {
        if (this.state.loading) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        this.setState({ ...this.state, loading: true });
        window
            .fetch('https://api.scel.to/Contact/SendEmail', {
                method: 'POST',
                type: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Name: this.state.name,
                    PhoneNumber: this.state.number,
                }),
            })
            .then(response => {
                console.info('response %o', response);
                if (response.ok) {
                    this.setState({
                        ...this.state,
                        showKvittering: true,
                        loading: false,
                    });
                } else {
                    this.setState({
                        ...this.state,
                        error:
                            'Vi klarte ikke å sende din kontaktinfo akkurat nå. Vennligst prøv senere.',
                        loading: false,
                    });
                }
            });

        event.preventDefault();
        event.stopPropagation();
    };
    render() {
        return (
            <Fragment>
                <Helmet
                    title="Scelto AS"
                    meta={createMetadata({
                        title: 'Ønsker du å bli kontaktet av oss?',
                        image: Working,
                    })}
                    link={[{ rel: 'icon', href: Favicon }]}
                />
                <Navigation />
                <FullPageImageWithContent
                    title="Ønsker du å bli kontaktet av oss?"
                    image={Working}
                >
                    <div className={styles.form}>
                        {this.state.showKvittering && (
                            <Fade>
                                <div className={styles.kvittering}>
                                    <img
                                        alt="Tor-Eric Sandvik - Daglig leder"
                                        className={styles.kvitteringImage}
                                        src={DL}
                                    />
                                    <div className={styles.kvitteringWrapper}>
                                        <h4 className={styles.kvitteringText}>
                                            Jeg kontakter deg!
                                        </h4>
                                        <h5
                                            className={
                                                styles.kvitteringTextAuthor
                                            }
                                        >
                                            - Tor-Eric Sandvik (Daglig leder)
                                        </h5>
                                    </div>
                                </div>
                            </Fade>
                        )}
                        {!this.state.showKvittering && (
                            <Fade>
                                <div className={styles.form__container}>
                                    <div
                                        className={styles.form__container__text}
                                    >
                                        <div className="">
                                            Hei, jeg heter&nbsp;
                                        </div>
                                        <InlineInput
                                            placeholder={'Ola Nordmann'}
                                            onChange={this.onNameChanged}
                                            maxLength="20"
                                            minWidth="320px"
                                        />
                                        <div className="">
                                            og mitt telefonnummer er&nbsp;
                                        </div>
                                        <InlineInput
                                            placeholder={'91234567'}
                                            onChange={this.onPhoneChanged}
                                            maxLength="8"
                                        />
                                    </div>
                                    <div
                                        className={
                                            styles.form__container__buttons
                                        }
                                    >
                                        <LightButton
                                            onClick={this.sendMail}
                                            disabled={
                                                !this.state.name.length ||
                                                !this.state.number.length
                                            }
                                            className={
                                                this.state.loading
                                                    ? styles.submitButtonLoading
                                                    : ''
                                            }
                                        >
                                            {this.state.loading
                                                ? 'Sender inn...'
                                                : 'Kontakt meg!'}
                                        </LightButton>
                                        {this.state.error && (
                                            <div
                                                className={styles.errorMessage}
                                            >
                                                {this.state.error}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Fade>
                        )}
                    </div>
                </FullPageImageWithContent>
                <Footer />
            </Fragment>
        );
    }
}
export default IndexPage;
