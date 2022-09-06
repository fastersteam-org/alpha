import axios from 'axios';

export const handleJoinSubmit = async (data) => {
    try {
        // Old code
        const response = await axios({
            method: 'post',
            url: 'https://faster-steam-staging.netlify.app/api/submit-form',
            data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log('here is the data');

        // const response = await axios({
        //     method: 'post',
        //     url: 'http://localhost:9000/api/submit-form',
        //     data,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};
