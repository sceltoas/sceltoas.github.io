import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ArrowDown from '../images/icons/Scelto–icon-arrow-down-dark-bg.svg';

import './FullPageImageWithHeader.less';

const FullPageImageWithHeader = ({
  image,
  title,
  subtitle,
  link,
  contactMeHref,
  children,
}) => (
  <div
    className="full-page-image-with-header"
    style={{
      background: `linear-gradient(rgba(40, 55, 57, 0.6), rgba(40, 55, 57, 0.6)), url(${image}) center`,
      backgroundSize: 'cover',
    }}
  >
    <h1 className="full-page-image-with-header__title">{title}</h1>
    {subtitle &&
      <h3 className="full-page-image-with-header__subtitle">{subtitle}</h3>}

    {children}

    {!!contactMeHref &&
      <h5 className="contact-form-link">
        <a href={contactMeHref} className="sc-link">
          Ønsker du å bli kontaktet av
          oss?
        </a>
      </h5>}

    {link &&
      <Link to={link}>
        <img
          style={{
            position: 'absolute',
            bottom: '40px',
            margin: 'auto',
            transform: 'translateX(-50%)',
          }}
          src={ArrowDown}
          width="40px"
          height="40px"
          alt={`Ikon for ${title}`}
        />
      </Link>}
  </div>
);

FullPageImageWithHeader.propTypes = {
  image: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.bool,
  contactMeHref: PropTypes.string,
};

export default FullPageImageWithHeader;
