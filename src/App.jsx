import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './Layout';
import About from './components/Pages/AboutUs/AboutUs';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    )
  )

  return (
  <main className=' overflow-x-hidden'>
    <RouterProvider router={router}/>
    </main>
  )
}

export default App