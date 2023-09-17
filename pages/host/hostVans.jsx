import { defer, useLoaderData, Await , Link } from "react-router-dom";
import { getHostVans, getVans } from "../../api"
import { Suspense } from "react";

export function loader() {
    return  defer({vans:getHostVans()});
}

export default function HostVan() {
    const dataPromise=useLoaderData();
    return(
        <div className="host-vans">
        
        <h1>Your Listed Vans</h1>
     <section className="host-van-list">
        <Suspense fallback={<h1>Loading Vans ...</h1>}>
<Await resolve={dataPromise.vans}>
{
    (vans) => {
    
const vansElements = vans.map( (van) =>
<Link to={van.id} key={van.id}>
<section className="host-van" >
<img src={van.imageUrl}/>
<div className="host-vans-info">
<h2>{van.name}</h2>
<h3>${van.price}/day</h3>
</div>
</section>
</Link>

)

return vansElements;

    }
}

</Await>
        </Suspense>
        
        
        </section>   
        </div>
    )
        
}