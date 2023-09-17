import "./server"

import Home from "./pages/Home"
import {createBrowserRouter,Route,createRoutesFromElements, RouterProvider} from "react-router-dom"
import Layout from "./pages/Layout"
import "./index.css"
import ReactDOM from "react-dom/client"
import Vans , {loader as vansLoader} from "./pages/vans/vans"
import Error from "./pages/Error"
import VanDetails, {loader as vanDetailsLoader} from "./pages/vans/vansDetails"
import Host from "./pages/host/Host"
import HostVan, {loader as hostVansLoader} from "./pages/host/hostVans"
import HostVanDetails , {loader as hostVanDetailsLoader} from "./pages/host/hostVanDetails"
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
<Route index element={<Home />} />

<Route 
path="vans"
 element={<Vans/>} 
 loader={vansLoader}
 errorElement={<Error />} />
<Route
 path="vans/:id"
  element={<VanDetails />} 
  loader={vanDetailsLoader}
  
  />
  <Route path="about" element={<h1>This is the about page ... to lazy to do it</h1>} />


<Route path="host" element={<Host />} >

<Route index element={<h1>Dashboard goes here</h1>} />
<Route path="income" element={<h1>Income goes here...</h1>} />

<Route path="reviews" element={<h1>reviews goes here sahboub</h1>} />
<Route
 path="vans"
 element={<HostVan />} 
 loader={hostVansLoader}
/>
<Route
 path="vans/:id"
  element={<HostVanDetails />}
  loader={hostVanDetailsLoader}
  />


</Route>





<Route path="*" element={<h1>This path dosent exist</h1>} />





  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);