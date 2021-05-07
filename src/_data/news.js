const axios = require('axios');
require('dotenv').config();

module.exports = async function() {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};