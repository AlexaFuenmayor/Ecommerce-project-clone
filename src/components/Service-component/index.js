import React from "react";
import veterinaria from "../../Images/veterinaria.png";
import perritos from "../../Images/Peluditos_Cachorros_2.png";
import gatico from "../../Images/Peludito_angel_gato.png";
import { SectionServices } from "./styles";
import imageMobile from "../../Images/mobile/Peluditos_Asomados_1.png";
import atencion from "../../Images/mobile/atencion-veterinaria.svg";
import medicos from "../../Images/mobile/gastosm.svg";
import funerarios from "../../Images/mobile/funerarios.svg";

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

      <section className="mobile-view">
        <article className="mobile-article">
          <div className="band-image-asomados">
            <img
              src={require("../../Images/mobile/Peluditos_Asomados_1.png")}
            />
            
          </div>
          <section className="container-services">
          <h2>¿Por qué un Seguro para Mascotas?</h2>
          <p>
            Estar preparado es la mejor opción para proteger la vida de aquellos
            peluditos a los que tanto amamos
          </p>
          <article className="container-services-icons">
            <div className="container-row">
            <figure>
              <img src={atencion} alt="atencion-veterinaria" />
              <figcaption>Atención <br /> <strong>Veterinaria</strong></figcaption>
            </figure>
            <figure>
              <img src={medicos} alt="servicios-medicos" />
              <figcaption>Gastos <br/> <strong> Médicos </strong> </figcaption>
            </figure>
            <figure>
              <img src={funerarios} alt="servicios-funerarios" />
              <figcaption>Servicios <br/> <strong>Funerarios</strong></figcaption>
            </figure>
            </div>
            <button className="see-plans-button">VEAMOS LOS PLANES</button>
          </article>
          </section>
        </article>
      </section>
    </SectionServices>
  );
};
export default Services;
