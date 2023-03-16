import './App.css'
//import characters from './data'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState } from 'react'


export default function App () { 
  // const example = {
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };

  const [characters, setCharacters] = useState([]);

  //const onSearch=(characterId)=>{window.alert(characterId)} 
  // const onSearch = (event)=> setCharacters([...characters, example]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {setCharacters(characters.filter(char => char.id !== id))}
  
  return (
    <div className='App'>
      <div>
        <div>
          <Nav onSearch={onSearch}/>
        </div>
          <header style={{fontFamily:'rickAndMorty', fontSize:'6em'}}>Rick & Morty</header>
          <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}
