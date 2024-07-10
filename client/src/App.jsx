import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainDashboard from './pages/MainDashboard';
import HomeLayout from './pages/HomeLayout';
import ErrorPage from './pages/ErrorPage';
import SignInSide from './pages/SignIn';
import SignUpSide from './pages/SignUp';
import Cart from './pages/cart/Cart';
import Category from './pages/category/Category';
import Menu from './pages/menu/Menu';



// importing actions and loader 
import {action as SignUpAction} from './pages/SignUp';
import {action as SignInAction} from './pages/SignIn';
import {action as BookingAction} from './pages/Bookings';
import {action as AddDishAction} from './pages/foodItems/AddDishesBox'
import {loader as BookingLoader} from './pages/reservation/AdminReservationLoader'
import {loader as ItemsLoader} from './pages/foodItems/AdminFoodItemsOutlet'
import {loader as MenuLoader} from './pages/menu/Menu'

import Admin from './pages/Admin';
import Orders from './pages/orders/Orders';
import AdminMainComponent from './pages/AdminMainComponent';
import AdminReservationLoader from './pages/reservation/AdminReservationLoader';
import AdminFoodItemsOutlet from './pages/foodItems/AdminFoodItemsOutlet';
import AdminFeedback from './pages/AdminFeedback';
import AdminFavourites from './pages/Adminfavourites';
import Bookings from './pages/Bookings';
import AddDishOutlet from './pages/foodItems/AddDishOutlet';
import ContactPage from './pages/contact/ContactPage';
// import {loader as DashboardLoader} from './pages/MainDashboard'


  

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainDashboard />,
        // loader:DashboardLoader
      },
      {
        path: 'signin',
        element: <SignInSide />,
        action: SignInAction
      },
      {
        path: 'signup',
        element: <SignUpSide />,
        action: SignUpAction
      },
      {
        path: 'category',
        element: <Category/>,
        // action: registerAction
      },
      {
        path: 'contact',
        element: <ContactPage/>,
        // action: registerAction
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: MenuLoader
      },
      {
        path: 'bookings',
        element: <Bookings />,
        action: BookingAction
      },
      {
        path: 'cart',
        element: <Cart/>,
        // action: registerAction
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          {
            index: true,
            element: <AdminMainComponent/>,
          },
          {
            path: 'items',
            element: <AdminFoodItemsOutlet />,
            loader: ItemsLoader
        
          },
          {
            path: 'addDish',
            element: <AddDishOutlet />,
            action: AddDishAction
          },
          
          {
            path: 'orders',
            element: <AdminFeedback/>,
          },
          {
            path: 'reservation',
            element: <AdminReservationLoader />,
            loader:BookingLoader
          },
          {
            path: 'feedbacks',
            element: <AdminFeedback/>,
            // action: registerAction
          },
          {
            path: 'favourite',
            element: <AdminFavourites/>,
            // action: registerAction
          },
 
        ]
      },
    ]
  },
]);
    
 const App = () => {


  return(
    <>
       <RouterProvider router={router} />
    </>

  )
};
export default App;
