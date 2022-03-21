import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";
import Chat from "./components/Chat/Chat";
import Products from "./components/Products/Products";
import Profile from "./components/Profile/Profile";
import TodoList from "./components/TodoList/TodoList";
import Blog from "./components/Blog/Blog";
import LoginRoute from "./components/Routes/LoginRoute";
import NoLoginRoute from "./components/Routes/NoLoginRoute";
import {useAuth} from "./firebase";

function App() {
  const user = useAuth();
  console.log(user);
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={
          <NoLoginRoute user={user}>
            <SignIn/>
          </NoLoginRoute>
        }/>
        <Route path='/signUp' element={
          <NoLoginRoute user={user}>
            <SignUp/>
          </NoLoginRoute>
        }/>
        <Route
          path='/home'
          element={
            <LoginRoute user={user}>
              <Home/>
            </LoginRoute>
          }/>
        <Route
          path='/products'
          element={
            <LoginRoute user={user}>
              <Products/>
            </LoginRoute>
          }/>
        <Route
          path='/blog'
          element={
            <LoginRoute user={user}>
              <Blog/>
            </LoginRoute>
          }/>
        <Route
          path='/chat'
          element={
            <LoginRoute user={user}>
              <Chat/>
            </LoginRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <LoginRoute user={user}>
              <Profile/>
            </LoginRoute>
          }
        />
        <Route
          path='/todolist'
          element={
            <LoginRoute user={user}>
              <TodoList/>
            </LoginRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
