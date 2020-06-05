import React from 'react';
import LinkedIn from '../images/icons/Scelto–icon-linkedin-footer.svg';
import Twitter from '../images/icons/Scelto–icon-twitter-footer.svg';
import styles from './Footer.module.less';
import miljofyrtarn from '../images/Miljfyrtarn-ensfarget-hvit.png';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.contact}>
            <div className={styles.contact}>
                <div>Følg oss på sosiale medier: </div>
                <div className={styles.contactSoMe}>
                    <a href="http://scel.to/g/lnkd">
                        <img
                            src={LinkedIn}
                            width="40px"
                            alt={`Ikon for linkedin`}
                        />
                    </a>

                    <a href="http://scel.to/g/tw">
                        <img
                            src={Twitter}
                            width="40px"
                            alt={`Ikon for twitter`}
                        />
                    </a>
                </div>
            </div>
            <div className={styles.email}>
                <a
                    className="sc-link"
                    href="mailto:post@scelto.no"
                    alt="e-mail Scelto - post@scelto.no"
                >
                    post@scelto.no
                </a>
            </div>
        </div>
        <div className={styles.addressAndOtherInfo}>
            <div className={styles.addressAndOtherInfoAddress}>
                <div>Scelto AS</div>
                <div>Karl Johans gate 16</div>
                <div>0154 Oslo</div>
            </div>
            <div className="">
                <div>Org.nr.: 914 757 274 MVA</div>
                <div>
                    Telefon:{' '}
                    <a className="sc-link" href="tel:+4790969097">
                        (+47) 909 69 097
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.copyrightAndCertifications}>
            <div className={styles.copyright}>Scelto AS &copy; 2016</div>
            <div className="">
                <a
                    href="https://www.miljofyrtarn.no/"
                    alt="Scelto er sertifisert miljøfyrtårn. Interesserte kan få miljørapporten ved henvendelser til bedriften."
                    title="Interesserte kan få miljørapporten ved henvendelser til bedriften"
                    target="_new"
                >
                    <img src={miljofyrtarn} />
                </a>
            </div>
        </div>
    </footer>
);

Footer.propTypes = {};

export default Footer;
