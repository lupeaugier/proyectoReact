import React, { useContext } from 'react'
import { CardDentist } from '../components/dentist/CardDentist';
import { GlobalContext } from '../context/GlobalContext';


const Favs = () => {
  const { state } = useContext(GlobalContext);
  const values = state.data;
  return (
    <CardDentist values={values}/>
  )
}

export default Favs