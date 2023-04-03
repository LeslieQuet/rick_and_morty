import './App.css'
import Cards from './components/Cards/Cards.jsx'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from "./components/Form/Form";
import { useState, useEffect} from 'react'
import {Routes, Route,  useLocation, useNavigate} from "react-router-dom"

export default function App () { 

  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ! CREDENCIALES FAKE
  const username = "lquetglas@mail.com";
  const password = "passwordDelFuturo";


//   function onSearch(character) {
//     fetch(`https://rickandmortyapi.com/api/character/${character}`)
//        .then((response) => response.json())
//        .then((data) => {
//           if (data.name) {
//              setCharacters((oldChars) => [...oldChars, data]);
//           } else {
//              window.alert('No hay personajes con ese ID');
//           }
//        });
//  }

const onSearch = (id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "0976a66d7e82.e06bb0df0c2f8fbac366";
 
  if (characters.find((char) => char.id === id)) {
    return alert("Personaje repetido");
  }

  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert("Algo salió mal");
      }
    });
};

 const onClose = (id) => {setCharacters(characters.filter(char => char.id !== id))}

 const login = (userData) => {
  if (userData.username === username && userData.password === password) {
    setAccess(true);
    navigate("/home");
  } else {
    alert("Credenciales incorrectas");
  }
};
 
  return (
    <div className='App'>
      {pathname !== "/" && <NavBar onSearch={onSearch} />}
      <header className='Header'>Rick & Morty</header>
      <div className='AppContainer'>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route path="/home" element= {<Cards characters={characters} onClose={onClose}/>}/>
          <Route path="/detail/:detailId" element= {<Detail/>}/>
          <Route path= "/about" element= {<About/>}/>
        </Routes>
      </div>
    </div>
  );
}
