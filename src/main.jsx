import { Component, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/root/Root.jsx'
import Home from './components/home/Home.jsx'
import Mobiles from './components/mobiles/Mobiles.jsx'
import Laptops from './components/laptops/Laptops.jsx'
import Users from './components/users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDetails from './components/userDetails/UserDetails.jsx'
import Posts from './components/posts/Posts.jsx'
import Post from './components/post/Post.jsx'
import postDetail from './components/postDetail/postDetail.jsx'


const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());


const router = createBrowserRouter([

  {
    path: '/',
    Component: Root,
    children: [

      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: postDetail
      }
    ]
  },
  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: <div>All my blogs here</div>
  },
  {
    path: 'app',
    Component: App
  },
  {
    path: '/app2',
    element: <App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
