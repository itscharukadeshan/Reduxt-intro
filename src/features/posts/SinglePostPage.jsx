/** @format */

import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className='flex items-center justify-center mt-4'>
      <div className='flex flex-col justify-center border-2 border-gray-600 shadow-lg rounded-lg p-6 w-96'>
        <div className=' p-6'>
          <h2 className='text-2xl font-sans font-bold mb-4'>{post.title}</h2>
          <p className='text- mb-8'>{post.body}</p>
          <Link to={`/post/edit/${post.id}`}>
            <button className='btn btn-sm my-4'>Edit Post</button>
          </Link>
          <div className='font-sans mb-3'>
            <PostAuthor userId={post.userId} />
            <TimeAgo timestamp={post.date} />
          </div>
          <ReactionButtons post={post} />
        </div>
      </div>
    </article>
  );
};

export default SinglePostPage;
