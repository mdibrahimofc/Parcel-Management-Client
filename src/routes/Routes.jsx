import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import PrivateRoute from './PrivateRoute'
import DashboardLayout from '../layouts/DashboardLayout'
import Profile from '../pages/Dashboard/Common/Profile'
import MainLayout from '../layouts/MainLayout'
import BookParcel from '@/pages/Dashboard/Client/BookParcel'
import MyParcel from '@/pages/Dashboard/Client/MyParcel'
import UpdateParcel from '@/pages/Dashboard/Client/UpdateParcel'
import AllParcels from '@/pages/Dashboard/Admin/AllParcels'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      // client route
      {
        path: 'book-parcel',
        element: (
          <PrivateRoute>
            <BookParcel/>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-parcel',
        element: (
          <PrivateRoute>
            <MyParcel/>
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/update-parcel/:id',
        element: (
          <PrivateRoute>
            <UpdateParcel/>
          </PrivateRoute>
        ),
      },
      // admin route
      {
        path: 'all-parcels',
        element: (
          <PrivateRoute>
            <AllParcels/>
          </PrivateRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
])
