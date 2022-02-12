import React from "react";
import { NavLink } from "react-router-dom";
import st from './Nav.module.css';

const Nav = () => {
    return (
      <nav className={st.nav}>
        <div>
          <button><NavLink to="/profile">Мой профиль</NavLink></button>
        </div>
        <div>
          <button><NavLink to='/dialogs'>Сообщения</NavLink></button>
        </div>
        <div>
          <button>Новости</button>
        </div>
        <div>
          <button>Упражнения</button>
        </div>
        <div>
          <button>Питание</button>
        </div>
        <div>
          <button>Составление тренировок</button>
        </div>
      </nav>
    );
}

export default Nav;