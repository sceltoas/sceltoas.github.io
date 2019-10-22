import React from 'react';
import Link from 'gatsby-link';

const EmployeeImageLink = ({ name, title, image, to }) => (
    <div
        style={{
            position: 'relative',
            width: '100%',
            marginBottom: '90px',
            transition: 'all 0.3s ease',
        }}
    >
        <Link to={to}>
            <img
                style={{ borderBottom: '4px solid #C5D200' }}
                src={image}
                width="100%"
            />
            <div
                style={{
                    position: 'absolute',
                    top: '90%',
                    padding: '0 10px',
                    width: '85%',
                    margin: 'auto',
                    background: '#333',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '20px',
                }}
            >
                <h5>{name}</h5>
                <p style={{ fontSize: '14px' }}>
                    #systemutvikler #fullstack #react #REST #node
                </p>
            </div>
        </Link>
    </div>
);

export default EmployeeImageLink;
