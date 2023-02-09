import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root, {loader as rootLoader} from './routes/root.jsx';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import { StrictMode } from 'react'

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
          path: "contacts/:contactId",
          element: <Contact />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
