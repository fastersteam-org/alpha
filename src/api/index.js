import axios from 'axios';

export const handleJoinSubmit = async (data) => {
    try {
        // Old code
        await axios({
            method: 'post',
            url: 'https://faster-steam-staging.netlify.app/api/submit-form',
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (err) {
        console.error(err);
    }
};
