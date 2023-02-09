import styled from "styled-components";
import bandImage from "../../Images/band.png";

export const SectionServices = styled.section`
  background-color: var(--background-header);
  width: 100%;
  height: 77vh;
  margin-bottom:30vh;
  /* margin-top: 2vh; */

  article.background-plans {
    background: linear-gradient(
      0deg,
      #fff 55%,
      #efefef 55%,
      #efefef 85%,
      #ffff 85%
    );
  }
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
    max-width: 95vw;
    align-items: center;
    margin: 100px 0 30px 30px;

    h1 {
      font-family: var(--familyTitle);
      font-size: 36px;
      text-align: center;
    }
    p {
      font-size: 18px;
      line-height: 30px;
      color: var(--grey);
      text-align: center;
      max-width: max-content;
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

  section.mobile-view {
    display: none;
    /* height: 500vh;
    flex-direction:column;
    display:flex; */
  }

  @media (max-width: 768px) {
    section.pc-view {
      display: none;
    }
    section.mobile-view {
      display: flex;
      flex-direction: column;
    }

    article.mobile-article {
      /* max-width: 20vw; */
      width: 100%;
    }
    div.band-image-asomados {
      width: 100%;
      /* max-width: 428px; */
      padding-left: 5%;
      padding-right: 5%;

      /* position: relative; */
      background-color: #f6f7f8;
      /* display: flex; */
      /* align-items: center;
      justify-content: center; */
      position: relative;
      height: 19.5vh;
      display: inline-flex;
      justify-content: center;
      /* align-items: center; */
    }

    descent-override.banda-image-asomados:after {
      content: "";
      display: block;
      /* position: absolute; */
      width: 100%;
      background: #f6f7f8;
      height: 109px;
      top: 0;
      z-index: -4;
    }

    img {
      /* max-width: 80vw; */

      height: 137px;
      /* margin-left: 50px; */
      vertical-align: middle;
      border-style: none;
      overflow: clip;
    }

    section.container-services {
      display: flex;
      flex-direction: column;
      flex: 1 0 auto;
      padding-right: 30px;
      padding-left: 30px;
      margin-right: auto;
      margin-left: auto;
      justify-content: center;

      h2 {
        padding-top: 20px;
        margin-bottom: 60px;
        font-family: var(--familyTitle);
        font-size: 1rem;
        color: var(--blue2);
        font-weight: bold;
        width: 100%;
        text-align: center;
      }

      p {
        margin: 0 auto;
        text-align: center;
        color: var(--text);
        font-size: 16px;
        line-height: 24px;
      }

      article.container-services-icons {
        display: flex;
        flex: 1 0 auto;
        margin-left:auto;
        margin-right: auto;
        width: 100%;
        flex-direction: column;
        max-width: 368px;
      

      div.container-row {
        margin-bottom: 60px;
        margin-top: 37px;
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        height: 20vh;

        figure {
          align-items: center;
          flex-direction: column;
          display: flex;
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
          position: relative;
          width:9vw;
          height: 10vh;
          padding-right: 15px;
          padding-left: 15px;
          
          figcaption {
            background-color: #fff;
            color: var(--text);
            font-size: 14px;
            width: auto;
            height: auto;
          }
          img {
            margin-bottom: 0.5rem;
            outline: none;
            vertical-align: middle;
            border-style: none;
          }
        }
      }
      button.see-plans-button{
        border-radius: 8px;
        background-color: var(--blue2);
        margin-bottom: 24px;
        border: none;
        color: #fff;
        font-size: 14px;
        height: 7vh;




      }
    }
    }
  }
`;
