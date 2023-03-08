import style from '../Card/Card.module.css'

export default function Card(props) {
   return (
      <div className={style.container}>
         <button className={style.xButton} onClick={props.onClose}>X</button>
         <h2 className={style.cardText}>{props.name}</h2>
         <img className={style.imgAvatar} src={props.image} alt={props.name}/>
         <h2 className={style.cardText}>{props.species}</h2>
         <h2 className={style.cardText}>{props.gender}</h2>
      </div>
   );
}
