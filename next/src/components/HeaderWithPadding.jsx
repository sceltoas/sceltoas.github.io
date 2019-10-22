import React from 'react';
import './HeaderWithPadding.less';

const HeaderWithPadding = ({ id, text, style }) => (
    <h5 id={id} className="header-with-padding">
        {text}
    </h5>
);

export default HeaderWithPadding;
