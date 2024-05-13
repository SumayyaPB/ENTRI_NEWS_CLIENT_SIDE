import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import SignUpform from './SignUpform.jsx'
import NewBlog from './NewBlog.jsx'
import Blog from './Blog.jsx'
import Login from './Login.jsx'
import PrivateRoute from './PrivateRoute.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<App/>
      },
      {
        path:'/signUp',
        element:<SignUpform/>
      },
      {
          path:'/new',
          element:
          (
            <PrivateRoute>
              <NewBlog/>
            </PrivateRoute>
          )
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/logout',
        element:<App/>
      }
      
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
