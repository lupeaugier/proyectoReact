import React from 'react'
//import { Link } from 'react-router-dom';
//import { useGetData } from '../hooks/UseGetData';
//import Avatar from '../assets/img/doctor.jpeg'
import { CardDentist } from '../components/dentist/CardDentist';
import { useGetData } from '../hooks/UseGetData';

export const endpoint = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const { values } = useGetData(endpoint);
    return (
        
        <CardDentist values={values}/>
        

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