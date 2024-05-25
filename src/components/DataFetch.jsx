import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../core/redux/fetch/action";

const DataFetcher = () => {
  const dispatch = useDispatch();
  const { loading, posts, comments, albums, users, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (
    (!posts || posts.length === 0) &&
    (!comments || comments.length === 0) &&
    (!albums || albums.length === 0) &&
    (!users || users.length === 0)
  ) {
    return <div>No data available</div>;
  }

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    maxWidth: "300px",
  };

  const containerStyle = {
    flexGrow: "1",
    margin: "0 auto",
    alignItems: "center",
    textAlign: "center",
  };

  const sectionStyle = {
    marginBottom: "32px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1>Fetched Data</h1>

      <div style={sectionStyle}>
        <h2>Users</h2>
        <div style={cardContainerStyle}>
          {users.map((user) => (
            <div key={user.id} style={cardStyle}>
              <h3>{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Website: {user.website}</p>
              <p>
                Address:{" "}
                {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={sectionStyle}>
        <h2>Comments</h2>
        <div style={cardContainerStyle}>
          {comments.map((comment) => (
            <div key={comment.id} style={cardStyle}>
              <h3>{comment.name}</h3>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={sectionStyle}>
        <h2>Albums</h2>
        <div style={cardContainerStyle}>
          {albums.map((album) => (
            <div key={album.id} style={cardStyle}>
              <h3>{album.title}</h3>
              <p>Album ID: {album.id}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={sectionStyle}>
        <h2>Posts</h2>
        <div style={cardContainerStyle}>
          {posts.map((post) => (
            <div key={post.id} style={cardStyle}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataFetcher;
