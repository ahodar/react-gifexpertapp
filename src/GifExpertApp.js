import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    
   const [categories, setCategories] = useState (['One Punch']);
   //const handleAdd =()=>{ 
        //Primera solución
        //setCategories([...categories,'HunterXHunter']);
        //Segunda solución
   //     setCategories(cats=>[...cats,'HunterXHunter']);
    //}

    return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}>Agregar</button> */}
             <ol> 
                {
                    categories.map( category =>(
                       // <li key={category}> {category}</li> Se saco el return y se reemplazaron las llaves por parentesis
                        <GifGrid key={category} category={category}/>
                    ))
                } 
            </ol> 

        </>
    )
}