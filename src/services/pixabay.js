import axios from 'axios'

async function getImages(query) {
    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: "",
            q: query
        }
    });

    return response.data;
}

export default getImages