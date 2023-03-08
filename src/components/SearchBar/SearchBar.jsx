import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button className={style.addButton} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
