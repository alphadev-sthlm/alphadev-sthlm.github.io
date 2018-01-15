import axios from 'axios';

function loadData() {
  return (dispatch) => {
    axios.get(`/data.json?v=${ new Date().getTime()}`)
      .then((response) => {
        dispatch({
          type: "SET_APPLICATION_DATA",
          data: response.data
        });
      });
  };
}

export default loadData;
