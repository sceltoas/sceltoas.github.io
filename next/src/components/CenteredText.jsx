import React from 'react';
import Fade from 'react-reveal/Fade';
import './CenteredText.less';

const CenteredText = ({text, fullpage = false}) => (
  <Fade>
    <div
      className={`centered-text ${fullpage ? 'centered-text--full-page' : ''}`}
    >
      <h2 className="centered-text__title">
        <span className="inline-text">{text}</span>
      </h2>
    </div>
  </Fade>
);

export default CenteredText;
