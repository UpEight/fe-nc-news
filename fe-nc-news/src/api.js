import axios from 'axios';

const request = axios.create({
  baseURL: 'https://upeight-nc-news.herokuapp.com/api/'
});

export const getArticles = (topic_slug, sort_by, order) => {
  return request
    .get('/articles', {
      params: { topic: topic_slug, sort_by: sort_by, order: order }
    })
    .then(response => response.data.articles);
};

export const getTopics = () => {
  return request.get('/topics').then(response => response.data.topics);
};

export const getArticleById = articleId => {
  return request
    .get(`/articles/${articleId}`)
    .then(response => response.data.article);
};

export const getCommentsByArticleId = articleId => {
  return request
    .get(`/articles/${articleId}/comments`)
    .then(response => response.data.comments);
};

export const postComment = (articleId, loggedInUser, commentText) => {
  return request
    .post(`/articles/${articleId}/comments`, {
      username: loggedInUser,
      body: commentText
    })
    .then(response => response.data.comment);
};

export const deleteComment = commentId => {
  return request.delete(`/comments/${commentId}`);
};
