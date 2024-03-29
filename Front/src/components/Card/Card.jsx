import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.container}>
         <div>
            <button className={style.xButton} onClick={onClose}>X</button>
         </div>
         <Link to={`/detail/${id}`} className={style.cardTitle}>
            <h5>Name: {name}</h5>
         </Link>
         {/* <h2 className={style.cardText}>Name: {name}</h2> */}
         <img className={style.imgAvatar} src={image} alt={name}/>
         <h2 className={style.cardText}>Specie: {species}</h2>
         <h2 className={style.cardText}>Gender: {gender}</h2>
      </div>
   );
}
