import styled from "styled-components";

export const NavContainer = styled.header`
  position: fixed ;
  background-color: var(--background-header);
  height: 56px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  

  img {
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
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    align-items: center;
    a {
      color: var(--blue1);
      font-size: 2rem;
      display: block;
    }

    button{
      margin: 0 15px 0 8px;
      padding: 2px 0px 6px;
      border: 2px solid #0077b9;
      border-radius: 30px;
      opacity: 1;
      font-size: 17px;
      font-weight: bold;
      text-align: center;
      color: #058bcc;
      background-color: white;
      width:130px;   
      text-align:color-interpolation-filters;
      a {
          margin: auto;
          display:block;
      }
    }
      @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: var(--blue1);
        display: inline;
      }

  }

}
  .links-nav.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 9%;
    left: 0;
    right: 0;
    text-align: left;
    a {
      color: var(--blue1);
      font-size: 15px;
      border-bottom: 1px solid #eaeaea;
      width: 300px;
      padding: 10px 20px;

    }
    /* a.nav-item.dropdown{

    } */

    img {
    height: 23px;
    width: 110px;
    justify-content: center;
    margin-left: 16px;
  }
  }
  .burguer-button {
    @media (min-width: 768px) {
      display: none;
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

  &.active{
    width:100%;
    height:100%;

  }

`;
