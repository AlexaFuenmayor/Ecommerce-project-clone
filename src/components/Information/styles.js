import styled from "styled-components";
import catDog from "../../Images/seguro-mascotas.jpg";

export const InformationPeludito = styled.main`
  background-image: linear-gradient(
      to top,
      #005684e0 0%,
      #006da88c 40%,
      #0083ca21 60%,
      #008ad400 100%
    ),
    url(${catDog});
  background-size: cover;
  height: 50rem;
  background-position: center;
  width:100%;

  div.information-container {
    display: inline-flex;
    margin: auto;
    width: 100%;

    section.section-thow {
      max-width: 90%;
      display: block;
      margin: auto;
      justify-content: center;
      margin-top: 30vh;

      p {
        color: white;
        font-size: 13px;
        margin-left: 6rem;
        line-height: 16.8px;
        text-align: start;
        letter-spacing: normal;


      }

      .logo-cat-dog {
        width: 300px;
        height: 132px;
        /* left: 40px; */
        z-index: 1;
        position:static;
      }

      input {
        display: block;
        width: 368px;
        height: 56px;
        margin-bottom: 16px;
        background-color: n;
        border: 2.5px solid #ffffff;
        background-color: transparent;
        padding-left: 20px;
        border-radius: 4px;
        font-size:18px;
        font-family: var(--family-paragraph);

        ::placeholder{
            color: var(--background-header);
        }
      }
    }

    button{
        width: 368px;
        background-color: var(--yellow1);
        border:none;
        height: 45px;

    }
  }
`;
