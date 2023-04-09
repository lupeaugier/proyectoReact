import React from 'react'
import { Link } from 'react-router-dom';
import { useGetData } from '../hooks/UseGetData';
import Avatar from '../assets/img/doctor.jpeg'
import { CardDentist } from '../components/dentistas/CardDentist';

export const endpoint = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const { values } = useGetData(endpoint);
    return (
        
        <CardDentist />
        

    //     <div>
    //         {
    //             values?.map((item) => (
    //                 <div key={item.id}>
    //                 <img src={Avatar} />
    //                 <p>{item.name}</p> 
    //                 <p>{item.username}</p>
    //                 <p>{item.id}</p>
    //                 <Link to={`/users/${item.website}`}>Ver mas:</Link>
    //         {/* <FavoriteButton item={item} /> */}
    //     </div>
    //     ))}
    // </div>
)
}

export default Home