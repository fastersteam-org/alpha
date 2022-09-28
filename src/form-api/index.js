import axios from 'axios';
import { navigate } from 'gatsby';

export const handleJoinSubmit = async (data) => {
    try {
        // Old code
        const res = await axios({
            method: 'post',
            url: 'https://faster-steam-staging.netlify.app/api/submit-form',
            data,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (res.status === 200) {
            navigate('/join/success');
        }
    } catch (err) {
        console.error(err);
    }
};
