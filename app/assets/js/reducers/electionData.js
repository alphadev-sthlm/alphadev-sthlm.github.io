// import Immutable, { Map, List } from "immutable";


const initialState = {

};

export default function (state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}
