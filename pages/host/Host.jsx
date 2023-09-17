import { Link, Outlet } from "react-router-dom";




export default function Host() {
    return(
        <>
        <section className="host-links">
        <Link to=".">Dashboard</Link>
        <Link to="income">Income</Link>
        <Link to="vans">Vans</Link>
        <Link to="reviews">Reviews</Link>
        </section>
         <Outlet />
         </>
    )
}