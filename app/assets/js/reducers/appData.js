const initialState = {
  professions: [],
  consultants: [],
  hq: [],
  news: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_APPLICATION_DATA':
      return Object.assign({}, state, {
        hq: action.data.hq,
        consultants: action.data.consultants,
        professions: action.data.professions
      });
    case 'SET_NEWS':
      return Object.assign({}, state, {
        news: action.data
      });
    default:
      return state;
  }
}
