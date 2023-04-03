import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css"
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className={style.navBar}>
            <ul className={style.ulMenu}>
                <li>
                    <NavLink to="/home" className={({isActive}) => isActive ? styleNav.active: styleNav.inactive}>Home</NavLink>
                </li>
                <SearchBar onSearch={props.onSearch}/>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? styleNav.active: styleNav.inactive}>About Me</NavLink>                    
                </li>
            </ul>
        </div>
    );
 }
 