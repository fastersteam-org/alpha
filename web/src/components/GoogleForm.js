import React from 'react';

const GoogleForm = ({ url }) => {
    return (
        <div className="flex justify-center mb-8">
            <iframe src={url} width="640" height="2587" frameBorder="0" marginHeight="0" marginWidth="0">
                Loading…
            </iframe>
        </div>
    );
};

GoogleForm.displayName = 'GoogleForm';
export default GoogleForm;