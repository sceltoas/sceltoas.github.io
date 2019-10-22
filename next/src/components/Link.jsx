import React from 'react';
import PropTypes from 'prop-types';
import { Link as GLink } from 'gatsby';
import './Link.less';

const Link = ({ to, children }) => (
    <GLink to={to} className="link">
        {children}
    </GLink>
);

Link.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Link;
