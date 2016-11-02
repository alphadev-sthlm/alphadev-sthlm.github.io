import {
  STATE_NOT_STARTED,
  STATE_FINISHED,
  STATE_ONGOING
} from "../constants";

function getStateStatus(statusCode) {
  switch (statusCode) {
    case 0:
      return STATE_NOT_STARTED;
    case 1:
      return STATE_ONGOING;
    case 2:
      return STATE_FINISHED;
    default:
      return STATE_NOT_STARTED;
  }
}

export function colorStates(states, alternativePresentation) {
  //Add the correct winner class the states in the svg map
  states.map((state, index) => {
    const stateStatus = getStateStatus(state.get("status"));

    const stateAbbreviation = alternativePresentation ? `${state.get("abbr")}_AL` : `${state.get("abbr")}`;
    const winner = state.get("winner");

    const statePolygonElement = document.getElementById(stateAbbreviation);

    statePolygonElement.classList = "";
    statePolygonElement.classList.add(`${stateStatus}`);
    statePolygonElement.classList.add("state-polygon-js");

    statePolygonElement.setAttribute("data-index", index);

    if (winner) {
      statePolygonElement.classList.add(`${winner}`);
    }
  });
}
