import React from "react";
import st from './Header.module.css';

const Header = () => {
    return <header className={st.header}>
        <img src={require('../img/logo1.png')} alt="icon"/>
    </header> 
}

export default Header;
