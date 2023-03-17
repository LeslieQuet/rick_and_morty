import axios from "axios";
import style from '../Detail/Detail.module.css'
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

export default function Detail() {
   const {detailId} = useParams();
   const [character, setCharacter] = useState([]);

   useEffect(() => {
      const URL_BASE = "https://be-a-rym.up.railway.app/api";
      const KEY = "0976a66d7e82.e06bb0df0c2f8fbac366";
  
      axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
        setCharacter(response.data)
      );
    }, []);

   return (
      <div className={style.container}>
         {character.name ? (
            <>
               <NavLink to="/home" >
                  <button className={style.xButton}>X</button>
               </NavLink>
               <div style={{display: 'inline-block', margin: '2em'}}>       
                  <h2 className={style.detailCard}>Name: {character.name}</h2>
                  <h2 className={style.detailCard}>Status: {character.status}</h2>
                  <h2 className={style.detailCard}>Specie: {character.species}</h2>
                  <h2 className={style.detailCard}>Gender: {character.gender}</h2>
                  <h2 className={style.detailCard}>Origin: {character.origin?.name}</h2>
               </div>
               <img src= {character.image} className={style.imgAvatar} alt="img"/>
            </>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
   );
}
