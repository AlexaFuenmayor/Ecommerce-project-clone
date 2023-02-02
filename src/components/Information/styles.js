import styled from "styled-components";
import catDog from "../../Images/seguro-mascotas.jpg";

export const InformationPeludito = styled.main`
  background-image: linear-gradient(
      to top,
      #005684e0 20%,
      #0075b9d6 40%,
      #0083ca21 60%,
      #008ad400 100%
    ),
    url(${catDog});
  background-size: cover;
  height: 35rem;
  background-position: center;
  /* width:100%; */
  background-position-y:9vh;
  display: flex;


  div.information-container {
    display: inline-flex;
    margin: auto;
    width: 100%;

    section.section-thow {
      max-width: 428px;
      display: block;
      margin: auto;
      justify-content: center;
      padding-top: 10vh;

      p {
        color: white;
        font-size: 0.7rem;
        margin-left: 9rem;
        line-height: 16.8px;
        text-align: start;
        letter-spacing: normal;
        margin-top:-3.5vh;
        margin-bottom: 3vh;


      }

      img.logo-cat-dog {
        /* width: 50vw; */
        height: 160px;
        /* left: 40px; */
        z-index: 1;
        /* position:static; */
      }

      input {
        display: block;
        width: 368px;
        height: 56px;
        margin-bottom: 16px;
        background-color: n;
        border: 1.5px solid #ffffff;
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
        border-radius: 8px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
        font-size:14px;
        color: #123446;

    }
  }
`;
