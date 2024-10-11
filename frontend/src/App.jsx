import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/NavBar/NavBar.jsx' 



function App() {
  

  return (
   <>
   <NavBar/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App
