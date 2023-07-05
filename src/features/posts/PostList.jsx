/** @format */

import { useSelector } from "react-redux";
import { selectAllPost } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

import React from "react";

function PostList() {
  const posts = useSelector(selectAllPost);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPost = orderedPosts.map((post) => (
    <article
      className='card w-96 p-5 my-6 bg-gray-200 shadow-xl border-gray-600 border-2'
      key={post.id}>
      <h3 className='card-title text-black'>{post.title}</h3>
      <p className='card-body text-gray-900'>
        {post.content.substring(0, 100)}
      </p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </div>
    </article>
  ));
  return (
    <>
      <h2 className=' text-2xl font-mono font-bold my-4'>Posts</h2>
      {renderedPost}
    </>
  );
}

export default PostList;
