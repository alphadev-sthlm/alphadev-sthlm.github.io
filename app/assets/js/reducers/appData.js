const initialState = {
  professions: [],
  consultants: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_NEWS':
      return Object.assign({}, state, {
        news: action.data.news
      });
    case 'SET_APPLICATION_DATA':
      return Object.assign({}, state, {
        consultants: action.data.consultants,
        professions: action.data.professions
      });
    default:
      return state;
  }
}
