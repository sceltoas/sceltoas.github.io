import React from 'react';
import Link from 'gatsby-link';
import './IconTitleAndIntroLink.less';

const IconTitleAndIntroLink = ({ icon, title, intro }) => (
    <div className="icon-title-and-intro-link">
        <img style={{}} src={icon} width="150px" alt={`Ikon for ${title}`} />
        <h5>
            <Link to="/tjenester/#systemutvikling" className="sc-link">
                {title}
            </Link>
        </h5>

        <p style={{}}>{intro}</p>
    </div>
);

export default IconTitleAndIntroLink;
