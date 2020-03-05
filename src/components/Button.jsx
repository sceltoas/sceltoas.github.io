import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styles from './Button.module.less';

export const LightButton = ({ text, to, className, disabled, children, ...rest }) => (
    <button
        to={to}
        className={`${className ? className : ''} ${styles.buttonLight}`}
        disabled={disabled}
        {...rest}
    >
        {text || children}
    </button>
);
export const LightButtonAnchor = ({
    text,
    href,
    className,
    children,
    ...rest
}) => (
    <a
        href={href}
        className={`${className ? className : ''} ${styles.buttonLight}`}
        {...rest}
    >
        {text || children}
    </a>
);

LightButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export const DarkButton = ({ text, to, className, children, ...rest }) => (
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
