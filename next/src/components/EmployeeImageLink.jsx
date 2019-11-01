import React from 'react';
import './EmployeeImageLink.less';
import { Link as GLink } from 'gatsby';
import Link from './Link';

const EmployeeImageLink = ({ name, title, image, to }) => (
    <div className="employee-image-link">
        <div className="image">
            <GLink to={to}>
                <img
                    src={image}
                    width="100%"
                    height="100%"
                    alt={`Bilde av ${name}`}
                />
            </GLink>
        </div>
        <div className="employee-image-link__text-container">
            <h5>
                <Link to={to}>{name}</Link>
            </h5>
            <p>{title}</p>
        </div>
    </div>
);

export default EmployeeImageLink;
