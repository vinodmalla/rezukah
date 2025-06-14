import './App.css'
//import Launching from './Component/Launching'
import Header from './Component/Header'
import { createBrowserRouter,Outlet,useOutlet } from 'react-router'
import Home from './Component/Home'
import About from './Component/About'
import Services from './Component/Services'
//import Cba from './Component/WebDevServices'
import WebDevServices from './Component/WebDevServices'
import MobileAppServices from './Component/MobileAppServices'
import CustomSoftwareServices from './Component/CustomSoftwareServices'
import DigitalMarketingServices from './Component/DigitalMarketingServices'
import GraphicAndUIUXServices from './Component/GraphicAndUIUXServices'
import ComplexBusinessApps from './Component/ComplexBusinessApps'
import ScrollTop from './Component/ScrollTop'
import Footer from './Component/Footer'

function App() {
  
  return (
    <>
     {/* <Launching />*/}
     <Header />
     <ScrollTop />
     <Outlet />
     <Footer />
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
      },{
        path:"/services",
        element:<Services />
      },{
        path:"/web",
        element:<WebDevServices />
      },{
        path:"/mobile",
        element:<MobileAppServices />
      },{
        path:"/csd",
        element:<CustomSoftwareServices />
      },{
        path:"/digital",
        element:<DigitalMarketingServices />
      },{
        path:"/graphics",
        element:<GraphicAndUIUXServices />

      },{
        path:"/crm",
        element:<ComplexBusinessApps />
      }
     ]
  }
 


])

