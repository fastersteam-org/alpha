import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const HeaderLink = ({ linkData }) => (
    <Link
        to={linkData.href}
        className="text-base font-medium text-gray-500 hover:text-gray-900"
    >
        {linkData.name}
    </Link>
);

HeaderLink.propTypes = {
    linkData: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
    }),
};

export default HeaderLink;
