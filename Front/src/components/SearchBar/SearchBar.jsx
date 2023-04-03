import style from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({onSearch}) {
   const [character, setCharacter] = useState("")
   const changeHandler = (event) => {
      //la propiedad value del event.target desestructurada y guardada en una variable//
      const {value} = event.target; 
      setCharacter(value);
   }
      return (
      <div className={style.searchContainer}>
         <input type='search' className={style.searchInput} onChange={changeHandler} />
         <button className={style.searchButton} onClick={()=>{onSearch(character)}}>Agregar</button>
      </div>
   );
}  
