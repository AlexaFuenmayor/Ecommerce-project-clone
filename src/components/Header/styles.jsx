import styled from "styled-components";

export const NavContainer = styled.header`
  position: fixed;
  background-color: var(--background-header);
  height: 56px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  img.logo {
    height: 23px;
    width: 110px;
    justify-content: flex-start;
    margin-left: 16px;
  }

  a {
    color: var(--blue1);
    font-family: var(--familyTitle);
    text-decoration: none;
    font-weight: bold;
    margin-right: 1rem;
  }

  .links-nav {
    position: fixed;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
    display:inline-flex;
    justify-content: flex-end;
    width:100%;
    a {
      color: var(--blue1);
      font-size: 2rem;
      display: block;
    }


    a#button{
      padding: 4px 10px 2px;
      border: 2px solid #0077b9;
      border-radius: 2rem;
      opacity: 1;
      color: var(--blue1);
      display: block;
      font-weight: bold;
      text-align: center;
      background-color: white;
      width: 130px;
      text-align: color-interpolation-filters;

    }

    @media (min-width: 950px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: var(--blue1);
        /* display: inline; */
      }
      img.logo {
      height: 23px;
      width: 110px;
      margin-right: 500vh;
    }


    }
  }
  div.links-nav.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 90%;
    left: 0;
    right: 0;
    text-align: left;
    a {
      color: var(--blue1);
      font-size: 15px;
      border-bottom: 1px solid #eaeaea;
      width: 51.5vw;
      padding: 10px 20px;
      background-color: var(--background-header);
      margin:0;
    }
    a#button{
      margin: 0;
      padding: 10px 20px;
      border: 0px solid #eaeaea;
      /* border-bottom: 1px solid #eaeaea; */

      border-radius: 0;
      opacity: 1;
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      color: #058bcc;
      background-color: white;
      text-align:left;
      width:51.5vw ;

    }


  }
  .burguer-button {
    @media (min-width: 950px) {
      display: none;

      img.logo {
    height: 23px;
    width: 110px;
    justify-content: center;
    /* margin-left: 16px; */
  }
    }


  }
`;
export const Burguer = styled.div`
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;

  .nav-icon-8 span {
    background-color: var(--blue1);
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
    height: 4px;
  }
  .nav-icon-8 span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(2) {
    top: 13px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  .nav-icon-8:not(.open):hover span:nth-child(1) {
    transform: scaleX(0.8);
  }
  .nav-icon-8:not(.open):hover span:nth-child(2) {
    transform: scaleX(0.5);
  }
  .nav-icon-8:not(.open):hover span:nth-child(3) {
    transform: scaleX(0.8);
  }
  .nav-icon-8.open span:nth-child(1) {
    top: 13px;
  }
  .nav-icon-8.open span:nth-child(2) {
    top: 13px;
  }
  .nav-icon-8.open span:nth-child(3) {
    top: 13px;
  }
`;
export const BgDiv = styled.div`
  position: absolute;
  background-color: var(--yellow1);
  width: 300px;
  height: 292px;
  top: -700px;
  left: -1000px;
  z-index: -1;

  &.active {
    width: 100%;
    height: 100%;
  }
`;
