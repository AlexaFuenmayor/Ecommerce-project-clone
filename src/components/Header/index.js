import { React, useState } from "react";

import BurgerMenu from "./BurgerMenu";
import { NavContainer, BgDiv } from "./styles";

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //when is true turn to false Y vice versa
    setClicked(!clicked);
  };

  return (
    <NavContainer>
        <div className="burguer-button">
          <BurgerMenu clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>

        <img className="logo" src={require("../../Images/Grupo-968.png")} alt="logo" />
        <div className={`links-nav ${clicked ? "active" : ""}`}>
          <a href="/" className="nav-item dropdown">
            ¿Por qué?
          </a>
          <a className="nav-item dropdown" href="/">Nuestros Planes</a>
          <a className="nav-item dropdown" href="/">¿Quieres más info?</a>
          <a className="nav-item dropdown" href="/">Club</a>
          <a className="nav-item dropdown" href="/">Blog</a>
          <a className="nav-item dropdown" id="button" href="/">Contáctanos</a>
        </div>

    </NavContainer>
  );
};
