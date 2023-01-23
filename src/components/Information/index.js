import React from "react";
import { InformationPeludito } from "./styles";
import logoCatDog from "../../Images/SP_LOGO_VA.svg";

const Information = () => {
  return (
    <InformationPeludito>
      <div className="information-container">
      <section className="section-thow">
        <div>
          <img className="logo-cat-dog" src={logoCatDog} alt="cat-dog" />
          <p>¡Protege a los que más amas!</p>
        </div>
        <input placeholder="Nombre de tu peludito" type="text"></input>
        <button>CONOCE MÁS</button>
      </section>
      </div>
    </InformationPeludito>
  );
};

export default Information;
