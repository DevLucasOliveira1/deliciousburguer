import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './page/home/Home.jsx'
import Initial from './page/initial/Initial.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[

      {
        path:'/',
        element: <Initial/>
      },
      {
        path: '/home',
        element: <Home/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
