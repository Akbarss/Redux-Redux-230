export const fetchDataRequest = () => ({
  type: "FETCH_DATA_REQUEST",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_DATA_SUCCESS",
  payload: data,
});

export const fetchCommentsSuccess = (comments) => ({
  type: "FETCH_COMMENTS_SUCCESS",
  payload: comments,
});

export const fetchAlbumsSuccess = (albums) => ({
  type: "FETCH_ALBUMS_SUCCESS",
  payload: albums,
});
export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchDataFailure = (error) => ({
  type: "FETCH_DATA_FAILURE",
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const [postsResponse, commentsResponse, albumsResponse, userResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/comments"),
        fetch("https://jsonplaceholder.typicode.com/albums"),
        fetch("https://jsonplaceholder.typicode.com/users"),
      ]);

      const posts = await postsResponse.json();
      const comments = await commentsResponse.json();
      const albums = await albumsResponse.json();
      const users = await userResponse.json();

      dispatch(fetchDataSuccess(posts));
      dispatch(fetchCommentsSuccess(comments));
      dispatch(fetchAlbumsSuccess(albums));
      dispatch(fetchUsersSuccess(users));
    } catch (error) {
      dispatch(fetchDataFailure(error.toString()));
    }
  };
};
