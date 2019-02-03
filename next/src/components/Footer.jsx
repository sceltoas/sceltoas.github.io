import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import LinkedIn from '../images/icons/Scelto–icon-linkedin-footer.svg';
import Facebook from '../images/icons/Scelto–icon-facebook-footer.svg';
import Twitter from '../images/icons/Scelto–icon-twitter-footer.svg';
import styles from './Footer.module.less';

const Footer = ({}) => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <div className={styles.contact}>
        <div>Følg oss på sosiale medier: </div>
        <div className={styles.contactSoMe}>
          <Link to="http://scel.to/g/lnkd">
            <img src={LinkedIn} width="40px" />
          </Link>

          <Link to="http://scel.to/g/fb/">
            <img src={Facebook} width="40px" />
          </Link>

          <Link to="http://scel.to/g/tw">
            <img src={Twitter} width="40px" />
          </Link>
        </div>
      </div>
      <div className={styles.email}>
        <a
          className="sc-link"
          href="mailto:post@scelto.no"
          alt="email to scelto - post@scelto.no"
        >
          post@scelto.no
        </a>
      </div>
    </div>
    <div className={styles.addressAndOtherInfo}>
      <div className={styles.addressAndOtherInfoAddress}>
        <div>Scelto AS</div>
        <div>Rosenkrantz' gate 7</div>
        <div>0159 Oslo</div>
      </div>
      <div className="">
        <div>
          Org.nr.: 914 757 274 MVA
        </div>
        <div>
          Telefon: <a className="sc-link" href="tel:+4790969097">
            (+47)
            909 69
            097
          </a>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>Scelto AS &copy; 2016</div>
  </footer>
);

Footer.propTypes = {};

export default Footer;
