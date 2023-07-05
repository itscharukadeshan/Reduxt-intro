/** @format */

import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";

import React from "react";

function PostList() {
  const post = useSelector(selectAllPost);
  const renderedPost = post.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <>
      <h2>Posts</h2>
      {renderedPost}
    </>
  );
}

export default PostList;
