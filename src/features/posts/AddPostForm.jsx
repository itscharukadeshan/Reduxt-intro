/** @format */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";

function AddPostForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  return (
    <>
      <h2 className=' card text-2xl font-mono font-bold my-4'>Add new Post</h2>
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
          className='form-control my-2 w-full max-w-xs'>
          Author
        </label>
        <select id='postAuthor' className='select select-bordered'>
          <option value=''></option>
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
            onClick={onSavePostClicked}>
            Save Post
          </button>
        </div>
      </form>
    </>
  );
}

export default AddPostForm;
