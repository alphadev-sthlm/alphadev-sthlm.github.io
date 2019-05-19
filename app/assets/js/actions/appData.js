import axios from 'axios';

function loadData() {
  return (dispatch) => {
    axios.get(`./data.json?v=${new Date().getTime()}`)
      .then((response) => {
        dispatch({
          type: 'SET_APPLICATION_DATA',
          data: response.data
        });
      });
    axios.get(`./news.json?v=${new Date().getTime()}`)
      .then((response) => {
        dispatch({
          type: 'SET_NEWS',
          data: response.data.news
        });
      });
  };
}

export function loadNews() {
  return (dispatch) => {
    axios.get(`../news.json?v=${new Date().getTime()}`)
      .then((response) => {
        dispatch({
          type: 'SET_NEWS',
          data: response.data.news
        });
      });
  };
}

export default loadData;
