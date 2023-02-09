import React from 'react' // , { Suspense }

import {
  createBrowserRouter,
} from 'react-router-dom'

import App from './App.js'
import Welcome from './pages/Welcome.js'
// const Welcome = React.lazy(() => import('./pages/welcome.js'));

// function Loading() {
//   return null
//   // return <div>Loading...</div>
// }

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Welcome />,
      },
      // {
      //   path: 'articles/:slug',
      //   element: <Suspense fallback={<Loading />}><Article /></Suspense>,
      // },
      {
        path: '*',
        element: <Welcome />,
      },
    ]
  },
]);
