import React, { useContext } from 'react'
import { CardDentistTest } from '../components/dentistas/CardDentistTest';
import { AuthContext } from '../context/AuthContext';


const Favs = () => {
  const { state } = useContext(AuthContext);
  const values = state.data;
  return (
    <CardDentistTest values={values}/>


  )
}

export default Favs