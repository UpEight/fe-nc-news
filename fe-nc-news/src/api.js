import axios from 'axios';

const request = axios.create({
  baseURL: 'https://upeight-nc-news.herokuapp.com/api/'
});

export const getArticles = () => {
  return request.get('/articles').then(response => response.data.articles);
};
