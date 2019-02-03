import React from 'react';
import PropTypes from 'prop-types';

const FullPageImageWithContent = ({image, children}) => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      minHeight: '800px',
      background: `linear-gradient(rgba(40, 55, 57, 0.4), rgba(40, 55, 57, 0.4)), url(${image}) center`,
      backgroundSize: 'cover',
    }}
  >
    {children}
  </div>
);

FullPageImageWithContent.propTypes = {
  image: PropTypes.object,
  children: PropTypes.element,
};

export default FullPageImageWithContent;
