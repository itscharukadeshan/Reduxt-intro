/** @format */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";

import { selectAllUsers } from "../users/userSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.body);
  const [userId, setUserId] = useState(post?.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(Number(e.target.value));

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(deletePost({ id: post.id })).unwrap();

      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setRequestStatus("idle");
    }
  };

  return (
    <selection className='flex justify-center mt-6'>
      <div className='p-14 border-gray-600 border-2 rounded-lg'>
        <h2 className='text-2xl pb-8'>Edit Post</h2>
        <form className='flex flex-col gap-5'>
          <label
            htmlFor='postTitle'
            className='form-control my-2 w-full max-w-xs'>
            Post Title
          </label>
          <input
            type='text'
            className='input input-bordered input-accent w-full max-w-xs'
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
          <label
            htmlFor='postAuthor'
            className='form-control my-2 w-full max-w-xs'>
            Author
          </label>
          <select
            id='postAuthor'
            className='select select-bordered'
            value={userId}
            onChange={onAuthorChanged}>
            <option value=''></option>
            {usersOptions}
          </select>
          <label
            htmlFor='postContent'
            className='form-control my-2 w-full max-w-xs'>
            Content
          </label>
          <textarea
            id='postContent'
            className='textarea textarea-accent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
          />
          <div className='flex flex-row gap-6 mt-4'>
            <button
              type='button'
              className='btn btn-info btn-outline'
              onClick={onSavePostClicked}
              disabled={!canSave}>
              Save Post
            </button>
            <button
              className='btn btn-warning btn-outline'
              type='button'
              onClick={onDeletePostClicked}>
              Delete Post
            </button>
          </div>
        </form>
      </div>
    </selection>
  );
};

export default EditPostForm;
