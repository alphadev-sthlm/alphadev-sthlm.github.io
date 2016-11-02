import fetchElectionData from "../webApi";

export const GET_ELECTION_DATA_SUCCESSFUL = "GET_ELECTION_DATA_SUCCESSFUL";

function loadData() {
  return (dispatch) => {
    fetchElectionData()
      .then((data) => {
        dispatch({
          type: GET_ELECTION_DATA_SUCCESSFUL,
          payload: data
        });
      });
  };
}

export default {
  loadData
};
