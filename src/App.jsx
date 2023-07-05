/** @format */

import PostList from "./features/posts/PostList";
import AddPostForm from "./features/posts/AddPostForm";
import NavBar from "./features/posts/NavBar";

function App() {
  return (
    <main>
      <NavBar className='w-full' />
      <div className='flex flex-col gap-4 my-5 justify-center items-center'>
        <AddPostForm />
        <PostList />
      </div>
    </main>
  );
}

export default App;
