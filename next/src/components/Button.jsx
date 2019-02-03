import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import styles from './Button.module.less';

const LightButton = ({text, to, className, children, ...rest}) => (
  <Link
    to={to}
    className={`${className ? className : ''} ${styles.buttonLight}`}
    {...rest}
  >
    {text || children}
  </Link>
);

LightButton.propTypes = {
  text: PropTypes.string.isRequired,
};

const DarkButton = ({text, to, className, children, ...rest}) => (
  <Link
    to={to}
    className={`${className ? className : ''} ${styles.buttonDark}`}
    {...rest}
  >
    {text || children}
  </Link>
);

DarkButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export {LightButton, DarkButton};
