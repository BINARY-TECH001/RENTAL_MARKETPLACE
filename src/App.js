import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, About, Services, Contact, PageNotFound, Blog } from './pages';

/** Routing */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
])

function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  );
}

export default App;
