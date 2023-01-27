import styled from "styled-components";
import bandImage from "../../Images/band.png";

export const SectionServices = styled.section`
  background-color: var(--background-header);
  width: 100%;
  height: 77vh;
  margin-bottom: 7.5vh;
  margin-top: 2vh;


  section.background-plans {
    background: linear-gradient(
      0deg,
      #fff 55%,
      #efefef 55%,
      #efefef 85%,
      #ffff 85%
    );
    position: relative;
  }
  /* section.background-plans:before {
    opacity: 1;
  } */
  /* section.background-plans::before {
    content: "";
    background-image: url(${bandImage});
    background-size: 150px;
    z-index: 1;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: absolute;
    opacity: 1;
  } */
  .plans-image {
    height: 221px;
    background-color: var(--background-header);
    width: 200px;
    border-radius: 15px 15px 0;
  }

  figcaption {
    background-color: var(--blue2);
    color: white;
    width: 203px;
    height: 28px;
    text-align: center;
    border-radius: 0 0 8px 8px;
  }

  div.plans-seguro {
    width: 50%;
    margin: auto;



    button {
      width: 100%;
      height: 37px;
      display: block;
      background-color: var(--yellow1);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
      border-radius: 8px;
      border: none;
      margin: 2vh 50px;
    }
  }

  div.container-plans {
    /* position: absolute; */
    width: 100%;
    justify-content: center;
    max-width: 100vw;
    align-items: center;
    margin: 100px 0 30px 30px;
    text-align: center;

    h1 {
      font-family: var(--familyTitle);
      font-size: 36px;
      text-align: center;
      width: 100%;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      color: var(--grey);
    }
  }

  div.container-images {
    display: flex;
    justify-content: space-around;
    margin: auto;
    width: 100%;
    max-width: 40vw;
    min-width: 55vw;

    figure {
      border-radius: 15px;
      border: 3px solid var(--blue2);
      /* margin-left: 25px; */
    }
  }
`;
