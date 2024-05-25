import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost } from "../core/redux/feateres/crud/crudThunk";

const PostForm = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const currentPost = useSelector((state) => state.posts.posts.find((post) => post.id === currentId));
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentPost) {
      setTitle(currentPost.title);
    }
  }, [currentPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost({ id: currentId, title }));
      setCurrentId(null);
    } else {
      dispatch(addPost(title));
    }
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add post" />
      <button type="submit">{currentId ? "Update" : "Add"}</button>
    </form>
  );
};

export default PostForm;
