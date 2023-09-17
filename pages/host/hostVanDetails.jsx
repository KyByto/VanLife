import { Link, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader({params}) {
    const id = params.id;
    
    return getVans(id)
}

export default function hostVanDetails() {
    const van = useLoaderData();
    
    return (
        <div className="host-van-details-container">
                    <Link relative="path" to="..">Back to all vans</Link>

        <div className="host-van-details">
        <div className="host-van-details-top">
<img src={van.imageUrl}/>
<div className="host-van-details-top-right">
    <h3 className={`detail-${van.type}`}>{van.type}</h3>
    <h2>{van.name}</h2>
    <h3>${van.price}/day</h3>
</div>


        </div>
        </div>
        </div> )
}