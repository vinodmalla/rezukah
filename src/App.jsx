import './App.css'
import Launching from './Component/Launching'
import Header from './Component/Header'
import { createBrowserRouter,Outlet,useOutlet } from 'react-router'
import Home from './Component/Home'
import About from './Component/About'

function App() {
  
  return (
    <>
     {/* <Launching />*/}
     <Header />
     <Outlet />
    </>
  )
}

export default App
export const approuter=createBrowserRouter([
  {
     path:"",
     element:<App />,
     children:[
      {
        path:"/",
        element:<Home />

      },{
        path:"/about",
        element:<About />
      }
     ]
  }
 


])

