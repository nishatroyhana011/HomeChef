import React from 'react';
import Home from '../components/pages/Home/Home';
import Services from '../components/pages/Service/Services';
import Login from '../components/signUp/Login';
import Registration from '../components/signUp/Registration';
import Main from '../Layout/Main';
import Blog from '../components/pages/Blog/Blog';
import AddService from '../components/pages/AddService/AddService';
import Review from '../components/pages/Review/Review';
import PrivateRoute from './PrivateRoute';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
            path: '/login', 
            element: <Login></Login>
          },
          {
            path: '/register', 
            element: <Registration></Registration>
          },
          {
            path: '/services',
            element:<Services></Services> 
          },
          {
            path: '/service',
            element: <PrivateRoute><AddService></AddService></PrivateRoute>
          },
          {
            path: '/review',
            element: <PrivateRoute><Review></Review></PrivateRoute>
          },
          {
            path: '/blog',
            element: <Blog></Blog>
          }
        ]
    }
])


export default router;