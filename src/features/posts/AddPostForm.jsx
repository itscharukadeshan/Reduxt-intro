/** @format */
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { addNewPost } from "./postsSlice";
import { useNavigate } from "react-router-dom";
function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUseId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const user = useSelector(selectAllUsers);
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUseId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUseId("");
        navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const userOptions = user.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className='flex justify-center p-12'>
      <div className='block max-w-md rounded-2xl bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-900'>
        <h2 className=' card text-2xl font-mono font-bold my-4'>
          Add new Post
        </h2>
        <form>
          <label
            htmlFor='postTitle'
            className='form-control my-2 w-full max-w-xs'>
            Post Title
          </label>
          <input
            className='input input-bordered input-accent w-full max-w-xs'
            type='text'
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged}
          />
          <label
            htmlFor='postAuthor'
            className='form-control my-2 w-full max-w-xs'
            value={userId}
            onChange={onAuthorChanged}>
            Author
          </label>
          <select
            id='postAuthor'
            className='select select-bordered'
            value={userId}
            onChange={onAuthorChanged}>
            <option value=''></option>
            {userOptions}
          </select>

          <label
            htmlFor='postContent'
            className='form-control my-2 w-full max-w-xs'>
            Content
          </label>
          <div className=' flex flex-col gap-3 w-96'>
            <textarea
              className='textarea textarea-accent'
              id='postContent'
              name='postContent'
              value={content}
              onChange={onContentChanged}
            />
            <button
              type='button'
              className='btn btn-outline btn-success'
              disabled={!canSave}
              onClick={onSavePostClicked}>
              Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPostForm;
