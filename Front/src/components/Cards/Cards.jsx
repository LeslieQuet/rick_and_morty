import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   console.log(props.character)
   //Se podría pasar directamente la desestructuración de characters como argumento//
   return (
      // <section className={style.cardsContainer}>
         <div className={style.cardsBox}> 
            {props.characters.map(character => (
               //Acá podría ir el return del map, hace retorno implício la arrow//
               <Card 
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  species={character.species}
                  gender={character.gender}
                  image={character.image}
                  onClose={()=>props.onClose(character.id)}
               />
            ))}
         </div>
      // </section>
   )
}
