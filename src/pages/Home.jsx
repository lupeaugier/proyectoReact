import React from 'react'
import { CardDentist } from '../components/dentist/CardDentist';
import { useGetData } from '../hooks/UseGetData';

export const endpoint = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const { values } = useGetData(endpoint);
    return ( 
        <main style={{height: "800px"}}>
            <CardDentist values={values}/>   
        </main>  
    )
}

export default Home