  import React from "react";
  import { PlansSection } from "./styles";

  const Plans = () => {
    return (

          <PlansSection>
              <section className="container">
                  <article className="container-plans">
                    <h2>
                      Nuestros Planes
                    </h2>
                    <p className="slogan-plans">Planeados pensando en la tranquilidad de tu peludo</p>
                    <div className="table-plans">
                      <div className="table-plans-column-1">
                        <p className="plan-type">Básico</p>
                        <p className="price-paragraph">$20.000</p>
                        <p className="mensual">Mensual</p>
                      </div>
                      <div className="table-plans-column-2">
                        <div className="column-yellow">
                          <p className="popular-band">Popular</p>
                        </div>
                        <p className="plan-type">Estándar</p>
                        <p className="price-paragraph">$28.000</p>
                        <p className="mensual">Mensual</p>
                        <div className="column-yellow">
                          <p className="popular-band">Popular</p>
                        </div>
                      </div>
                      <div className="table-plans-column-3">
                        <p className="plan-type">Premium</p>
                        <p className="price-paragraph">$36.000</p>
                        <p className="mensual">Mensual</p>

                      </div>
                    </div>

                  </article>

              </section>


          </PlansSection>

    );
  };

  export default Plans;
