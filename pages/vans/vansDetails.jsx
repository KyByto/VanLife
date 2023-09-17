import { Await, Link, defer, useLoaderData, useLocation, useParams } from "react-router-dom"
import { getVans } from "../../api";
import React from "react";

export function loader({params}) {
    const id = params.id;
  
    return defer({vanDetails:getVans(id)})
}

export default function VanDetails() {
const location = useLocation();
const state = location.state;

const dataPromise= useLoaderData();

    return (
        <>
        <Link
         to={state ?`..?type=${state}` : ".."} 
         relative="path"
         className="vanDetails-link">Back to all vans</Link>
       <React.Suspense fallback={<h1>Vans Details Loading...</h1>} >
        <Await resolve={dataPromise.vanDetails}>
        {
            (vanDetails) => {
                
                
return (
    <section className="vanDetails">
        <img src={vanDetails.imageUrl} />
        <i className={`detail-${vanDetails.type}`}>{vanDetails.type}</i>
        <h2>{vanDetails.name}</h2>
<h2>${vanDetails.price}/day</h2>
    </section>
)  }     }
        </Await>
        </React.Suspense>
        </>
    )
}