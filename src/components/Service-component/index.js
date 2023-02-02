import React from "react";
import veterinaria from "../../Images/veterinaria.png";
import perritos from "../../Images/Peluditos_Cachorros_2.png";
import gatico from "../../Images/Peludito_angel_gato.png";
import { SectionServices } from "./styles";

const Services = () => {
  return (
    <SectionServices>
      <section className="pc-view">
        <div className="container-plans">
          <h1> ¿Por qué Seguro Peludo? </h1>
          <p>
            Estar preparado es la mejor opción para proteger la vida de aquellos
            peluditos a los que tanto amamos
          </p>
        </div>
        <article className="background-plans">
          <div className="plans-seguro">
            <div className="container-images">
              <figure>
                <img
                  className="plans-image"
                  src={veterinaria}
                  alt="veterinaria"
                />
                <figcaption>Atención Veterinaria</figcaption>
              </figure>

              <figure>
                <img className="plans-image" src={perritos} alt="perrito" />
                <figcaption>Servicio de Guardería</figcaption>
              </figure>

              <figure>
                <img className="plans-image" src={gatico} alt="gatico" />
                <figcaption>Servicios Funerarios</figcaption>
              </figure>
            </div>
            <button>VEAMOS LOS PLANES</button>
          </div>
        </article>
      </section>

      <section className="moblie-view">

      </section>
    </SectionServices>
  );
};
export default Services;
