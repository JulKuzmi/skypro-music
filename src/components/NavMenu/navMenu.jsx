import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./navMenu.style";
const Menu = () => {
  return (
    <S.NavMenu>
      <S.ListMenu>
        <S.MenuItem>
          <Link to="/">
            <S.MenuLink>Главное</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/myplaylist">
            <S.MenuLink>Мой плейлист</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/login">
            <S.MenuLink>Выйти</S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.ListMenu>
    </S.NavMenu>
  );
};
export function Nav() {
  const [open, close] = useState(false);
  const toggleMenu = () => close(!open);
  const enter = (event) => {
    if (event.key === "Enter") {
      toggleMenu();
    }
  };
  return (
    <S.MainNav>
      <S.NavLogo>
        <S.LogoImage src="img/logo.png" alt="logo" />
      </S.NavLogo>
      <S.NavBurger
        role="button"
        tabIndex={0}
        onKeyDown={enter}
        onClick={toggleMenu}
      >
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {open && Menu()}
    </S.MainNav>
  );
}
