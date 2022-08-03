import React from 'react';
import PropTypes from 'prop-types';

const HeaderLink = ({ linkData }) => (
    <a
        href="#"
        className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
        {linkData.name}
    </a>
);

HeaderLink.propTypes = {
    linkData: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
    }),
};

export default HeaderLink;
