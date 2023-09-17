import { Link, Outlet } from "react-router-dom";



export default function Layout() {

return(
    <div className="wrapper">
   
    <nav className="absolute-navbar">
<Link to="/">#VANLIFE</Link>
<section>
<Link to="host">Host</Link>
<Link to="/about">About</Link>
<Link to="/vans">Vans</Link>
<Link to="/login">Login</Link>

</section>

    </nav>
    <main className="container">
    <Outlet   />
    </main>
   
    <footer className="absolute-footer">© 2022 #VANLIFE</footer>
    </div>
)

}