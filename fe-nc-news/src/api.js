import axios from 'axios';

const request = axios.create({
  baseURL: 'https://upeight-nc-news.herokuapp.com/api/'
});

export const getArticles = topic_slug => {
  return request
    .get('/articles', { params: { topic: topic_slug } })
    .then(response => response.data.articles);
};

export const getTopics = () => {
  return request.get('/topics').then(response => response.data.topics);
};
