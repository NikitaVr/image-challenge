import axios from 'axios'

async function getImages(query) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: "13880753-5717f7f6e7607e00db6390228",
            q: query
        }
    });

    return response.data;
}

export default getImages