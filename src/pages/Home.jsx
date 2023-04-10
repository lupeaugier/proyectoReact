import React from 'react'
import { CardDentist } from '../components/dentist/CardDentist';
import { useGetData } from '../hooks/UseGetData';

export const endpoint = "https://jsonplaceholder.typicode.com/users"

const Home = () => {
    const { values } = useGetData(endpoint);
    return (   
            <CardDentist values={values}/>   
    )
}

export default Home