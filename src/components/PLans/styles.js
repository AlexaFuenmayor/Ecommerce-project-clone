import styled from "styled-components";
import imageBackgraound from "../../Images/backgroud.png";

export const PlansSection = styled.section`
    background-image: url(${imageBackgraound});
    height: 100vh;
    background-repeat: repeat;
    background-size: 150px;

    .container {
      display: flex;
      flex-direction: column;
      padding: 0 30px;

    .container-plans {
      display: block;
      width: 100%;
      max-width: 752px;
      margin: auto;
      h2 {
        color: var(--background-header);
        padding-top: 50px;
        margin-bottom: 30px;
        font-family: var(--familyTitle);
        font-size: 30px;
        text-align: center;
      }
      p.slogan-plans {
        text-align: center;
        color: var(--background-header);
        margin-bottom: 60px;
      }
      .table-plans {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 20px;

        .table-plans-column-1 {
          border-radius: 8px 0 0 8px;
          background-color: #efefef;
          text-align: center;
          overflow: hidden;
          margin-bottom: 1.2rem;
          margin-top: 1.2rem;

          p.plan-type {
            color: var(--background-header);
            font-size: 24px;
            text-align: center;
            font-weight: 400;
            background-color: var(--blue3);
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
            line-height: 30px;
          }
          p.price-paragraph {
            color: var(--blue3);
            padding-top: 30px;
            font-family: var(--familynumbers);
            font-size: 24px;
          }
          p.mensual {
            color: var(--blue3);
            line-height: 30px;
            padding-bottom: 30px;
            font-size: 24px;
            font-family: var(--family-paragraph);
          }
        }
        .table-plans-column-2 {
          background-color: var(--text-mensual-light);
          border-radius: 8px;
          overflow: hidden;

          .column-yellow {
            height: 24px;
            padding: 0px 3px;
            background-color: var(--yellow5);
            display: flex;
            align-items: center;
          }
          p.mensual {
            line-height: 30px;
            color: var(--yellow4);
            width: 100%;
            padding-bottom: 30px;
            font-size: 24px;
            text-align: center;
            font-family: var(--family-paragraph);
          }
          p.plan-type {
            line-height: 30px;
            font-size: 24px;
            background-color: var(--yellow3);
            color: var(--background-header);
            text-align: center;
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
            font-family: var(--familynumbers);
          }
          p {
            line-height: 30px;
            color: var(--yellow4);
            width: 100%;
            text-align: center;
            padding-bottom: 5px;
          }
          p.price-paragraph {
            color: var(--yellow4);
            padding-top: 30px;
            font-family: var(--familynumbers);
            font-size: 24px;
          }
        }

        .table-plans-column-3 {
          border-radius: 0 8px 8px 0;
          background-color: #efefef;
          text-align: center;
          overflow: hidden;
          margin-bottom: 1.2rem;
          margin-top: 1.2rem;

          p.plan-type {
            color: var(--background-header);
            font-size: 24px;
            text-align: center;
            font-weight: 400;
            background-color: var(--blue3);
            padding-bottom: 0.4rem;
            padding-top: 0.5rem;
          }
          p.price-paragraph {
            color: var(--blue3);
            padding-top: 30px;
            font-family: var(--familynumbers);
            font-size: 24px;
          }


          p.mensual {
            color: var(--blue3);
            line-height: 30px;
            padding-bottom: 30px;
            font-size: 24px;
            font-family: var(--family-paragraph);
            padding-top:5px;
          }
        }
      }
    }
  }
`;
