import React from 'react';
import Link from 'gatsby-link';

const IconTitleAndIntroLink = ({ icon, title, intro }) => (
    <div
        style={{
            textAlign: 'center',
            maxWidth: '300px',
            margin: 'auto auto 100px auto',
            width: '100%',
            color: '#fff',
        }}
    >
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
