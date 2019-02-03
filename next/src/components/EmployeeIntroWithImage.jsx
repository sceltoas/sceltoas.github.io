import React from 'react';
import Twitter from '../components/icons/Twitter';
import LinkedIn from '../components/icons/LinkedIn';
import Github from '../components/icons/Github';

import styles from './EmployeeIntroWithImage.module.less';

const EmployeeIntroWithImage = ({employee}) => (
  <div className={styles.wrapper}>
    <div
      style={{
        marginBottom: '50px',
      }}
    >
      <h1
        className="left-align white-text"
        style={{
          wordBreak: 'all',
        }}
      >
        {employee.name}
      </h1>
      {employee.keyFeatures &&
        employee.keyFeatures.map (feature => (
          <p
            className="left-align grey-text"
            style={{
              lineHeight: '1em',
            }}
          >
            {feature}
          </p>
        ))}
      <p
        style={{
          marginTop: '50px',
        }}
      >
        <a className="sc-link" href={`mailto:${employee.email}`}>
          {employee.email}
        </a>
      </p>

      {employee.linkedIn &&
        <a
          style={{
            marginRight: ' 20px',
            paddingBottom: '20px',
          }}
          href={`https://www.linkedin.com/in/${employee.linkedIn}`}
        >
          <LinkedIn fill="#fff" />
        </a>}

      {employee.twitter &&
        <a
          style={{
            marginRight: ' 20px',
          }}
          href={`https://twitter.com/${employee.twitter}`}
        >
          <Twitter fill="#fff" />
        </a>}

      {employee.github &&
        <a href={`https://github.com/${employee.github}`}>
          <Github fill="#fff" />
        </a>}

    </div>
    <img
      className={styles.image}
      src={employee.image}
      width="100%"
      alt={`Image of ${employee.name}`}
    />
  </div>
);

export default EmployeeIntroWithImage;
