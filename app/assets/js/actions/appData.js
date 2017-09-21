import axios from 'axios';

function loadData() {
  return (dispatch) => {
    axios.get('https://raw.githubusercontent.com/alphadev-sthlm/alphadev-sthlm.github.io/master/data.json?v=1')
      .then((response) => {
        dispatch({
          type: "SET_APPLICATION_DATA",
          data: response.data
        });
      });
  };
}

export default loadData;
