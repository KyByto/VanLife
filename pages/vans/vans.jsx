
import {  useSearchParams, useLoaderData , Link, Await , defer } from "react-router-dom";
import {getVans} from "../../api"
import React from "react"
export  function loader() {

return defer({vans:getVans()});
}





export default function Vans() {
  const [searchParams,setSearchParams] = useSearchParams();
 const typeFilter = searchParams.get("type");

const dataPromise = useLoaderData()

function handleFilterChange(key, value) {
  setSearchParams(prevParams => {
      if (value === null) {
          prevParams.delete(key)
      } else {
          prevParams.set(key, value)
      }
      return prevParams
  })
}




    return(
    <>

    <h1 className="van-h1">Explore our van options
</h1>
<section className="vans-links">
<button  onClick={() =>handleFilterChange("type","simple")}   className={`van-link simple   ${typeFilter ==="simple" ? "simple-selected" : ""}`} >Simple</button> 
<button onClick={() =>handleFilterChange("type","luxury")} className={`van-link  luxury  ${typeFilter ==="luxury" ? "luxury-selected" : ""}`} >Luxury</button> 
<button onClick={() =>handleFilterChange("type","rugged")}  className={`van-link  rugged ${typeFilter ==="rugged" ? "rugged-selected" : ""}`}   >Rugged</button> 
{ typeFilter ? <p onClick={() =>handleFilterChange("type",null)} >Clear Filters</p> : null  }
   </section>
   <section className="Vans">
    <React.Suspense fallback={<h1>Loading Vans.....</h1>}>
    <Await resolve={dataPromise.vans}>
      {(vans)=> {

const filteredVans = typeFilter ? vans.filter( van => van.type.toLowerCase() ===typeFilter  ) : vans



const vanElements = filteredVans.map(van => (
  <div key={van.id} className="van">
      <Link
          to={van.id}
          state={typeFilter}
      >
          <img src={van.imageUrl} />
          <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
          </div>
          <i className={`van-link ${van.type} selected`}>{van.type}</i>
      </Link>
  </div>
))


return vanElements


      }}
    </Await>
    </React.Suspense>
   </section>
    </>
    
    
        )
}