import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Home, Contact, About, Job, PageNotFound, UserRoleSelection, EmployerLogin, EmployeeLogin} from './pages/index.js';
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path="/login" element={<UserRoleSelection />} />
    <Route path="/login/employee" element={<EmployeeLogin />} />
    <Route path="/login/employer" element={<EmployerLogin />} />
    <Route path='/about' element={<About/>}/>
    <Route path='/jobs' element={<Job/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Route>
 )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
