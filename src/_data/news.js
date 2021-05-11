require('dotenv').config();
const axios = require('axios');
const countries = require('./countries.json');

async function getNews(country) {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`);
        return {
            "country":country,
            "articles": response.data.articles
        }; 
    } catch (error) {
        console.log(error);
    }
};


module.exports = async function() {
   
    const newsPromises = countries.map(getNews);
    return Promise.all(newsPromises).then( newsObj => {
        // return [].concat.apply([],newsObj);
        return newsObj;

    })
};