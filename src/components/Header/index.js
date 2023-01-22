import { React, useState } from "react";

import BurgerMenu from "./BurgerMenu";
import { NavContainer, Wrapper } from "./styles";

export const Header = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //when is true turn to false
    setClicked(!clicked);
  };

  return (
    <NavContainer>
      <Wrapper>
        <div className="burguer-button">
          <BurgerMenu clicked={clicked} handleClick={handleClick} />
        </div>

        <img src={require("../../Images/Grupo-968.png")} alt="logo" />
        <nav className={`link-nav ${clicked ? "active" : ""}`}>
          <a href="/" className="button-porque">
            ¿por qué?
          </a>
          <a href="/">Nuestros Planes</a>
          <a href="/">¿Quieres más info?</a>
          <a href="/">Club</a>
          <a href="/">Blog</a>
          <a href="/">Contáctanos</a>
        </nav>
      </Wrapper>
    </NavContainer>
  );
};
