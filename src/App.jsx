import React, { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  return (
    <>
      <PostForm currentId={currentId} setCurrentId={setCurrentId} />
      <PostList setCurrentId={setCurrentId} />
    </>
  );
};

export default App;
