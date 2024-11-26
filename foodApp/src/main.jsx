import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Search from './components/Search.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import {Provider}from "react-redux"
import store from './utils/Store.js'
import Cart from './components/Cart.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"search",
        element:<Search/>
      },{
        path:":id",
        element:<RestaurantMenu/>      },
        {
          path:"cart",
          element:<Cart/>
        }

    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
