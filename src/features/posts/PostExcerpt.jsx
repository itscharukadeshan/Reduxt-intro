/** @format */

import React from "react";
import ReactionButtons from "./ReactionButtons";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostExcerpt = ({ post }) => {
  return (
    <article className='card w-96 p-5 my-6 bg-gray-200 shadow-xl border-gray-600 border-2'>
      <h3 className='card-title text-black'>{post.title}</h3>
      <p className='card-body text-gray-900'>{post.body.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </div>
    </article>
  );
};

export default PostExcerpt;