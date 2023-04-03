import style from './Form.module.css'
import { useState } from "react";
import validation from "./Validation.js";

export default function Form({ login }) {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({ ...userData, [property]: value });
        validation({ ...userData, [property]: value }, errors, setErrors);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    };
    
   return (
    <form onSubmit={submitHandler} className={style.container}>
        <div>
            <label htmlFor="username">Username:</label>
            <input className={style.searchInput} type="text" name="username" value={userData.username} onChange={handleInputChange}/>
            <p>{errors.username}</p>
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input className={style.searchInput} type="text" name="password" value={userData.password} onChange={handleInputChange}/>
        </div>
        <button type="submit" className={style.xButton}>LOGIN</button>
    </form>
   );
}