import React from 'react'
import JSXConverter from './pages/JSXConverter'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import DiffingDemo from './pages/DiffingDemo';
import AppLayout from './layout/AppLayout'
import HomePage from './pages/HomePage';


const routes = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jsxconverter' element={<JSXConverter />}/>
      <Route path='/diffingDemo' element={<DiffingDemo />}/>
     </Route>
  )
);
function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}
export default App