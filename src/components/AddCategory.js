import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setinputValue] = useState('');//por defecto es undefine
//Lo ponemos en vacio por defecto para que no haya error
const handleInputChange = (e)=>{
    //console.log(e.target.value);
    setinputValue(e.target.value);
}
const handleSubmit =(e)=>{
     //Prevengo el comportamiento por defecto del submit
   e.preventDefault();

if(inputValue.trim().length >2)
{
    setCategories(cats=>[inputValue, ...cats ]);
    setinputValue('');
}
  
  
   
   //atrapo el evento
   console.log('Submit hecho');
}

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}