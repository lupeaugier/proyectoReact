import React, { useContext } from 'react'
import { CardDentist } from '../components/dentistas/CardDentist';
import { AuthContext } from '../context/AuthContext';


const Favs = () => {
  const { state } = useContext(AuthContext);
  const values = state.data;
  return (
    <CardDentist values={values}/>


  )
}

export default Favs