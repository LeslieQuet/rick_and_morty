import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav(props) {
    return (
        <div className={style.navBar}>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    );
 }
 