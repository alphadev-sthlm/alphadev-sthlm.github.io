const initialState = {
  professions: [],
  consultants: [],
  news: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_APPLICATION_DATA':
      return Object.assign({}, state, {
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
