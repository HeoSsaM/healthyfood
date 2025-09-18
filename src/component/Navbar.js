import React from 'react';
import logoImg from "../assets/logo3.png";
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn = false, onToggleAuth }) => {
  return (
    <header>
      <div className="top-area">
        <h1 className="logo">
          <Link to="/">
            <img src={logoImg} alt="logo" /> <span>MEAL</span><span>LIGHT</span>
          </Link>
        </h1>

        {isLoggedIn && <NavLink to="/mypage" className="mypage">마이페이지</NavLink>}
        <button type="button" className="btn btnLogin" onClick={onToggleAuth}>
          {isLoggedIn ? '로그아웃' : '로그인'}          
        </button>
      </div>
      <nav className="gnb">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/meals">식단관리</NavLink>
        <NavLink to="/tips">건강팁</NavLink>
        <NavLink to="/about">MEALLIGHT</NavLink>




      </nav>
    </header>
  )
}

export default Navbar