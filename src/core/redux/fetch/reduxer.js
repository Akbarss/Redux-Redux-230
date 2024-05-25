const initialState = {
  loading: false,
  posts: [],
  comments: [],
  albums: [],
  users: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, posts: action.payload };
    case "FETCH_COMMENTS_SUCCESS":
      return { ...state, loading: false, comments: action.payload };
    case "FETCH_ALBUMS_SUCCESS":
      return { ...state, loading: false, albums: action.payload };
    case "FETCH_USERS_SUCCESS":
      return { ...state, loading: false, users: action.payload };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
