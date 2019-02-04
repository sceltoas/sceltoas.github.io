import React from 'react';
import './EmployeeImageLink.less';
import {Link as GLink} from 'gatsby';
import Link from './Link';

const EmployeeImageLink = ({name, title, image, to, style}) => (
  <GLink className="employee-image-link" to={to}>
    <div className="image">
      <img src={image} width="100%" height="100%" alt={`Bilde av ${name}`} />
    </div>
    <div className="employee-image-link__text-container">
      <h5>
        <Link to={to}>
          {name}
        </Link>
      </h5>
      <p>{title}</p>
    </div>
  </GLink>
);

export default EmployeeImageLink;
