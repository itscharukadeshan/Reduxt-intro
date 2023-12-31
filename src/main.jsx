/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";
import { fetchUsers } from "./features/users/userSlice";
import { fetchPosts } from "./features/posts/postsSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={<App />}></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
