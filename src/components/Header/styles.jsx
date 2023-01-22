import styled from "styled-components";

export const NavContainer = styled.header`
background-color: var(--background-header);
`
export const Wrapper = styled.nav`
height:56px;
padding:10px;
display: flex;
align-items:center;
justify-content:space-between;

img{
    height:23px;
    width:110px;
    justify-content: flex-start;
    margin-left:16px;
}

a{
    color: var(--blue1);
    font-family: var(--familyTitle);
    text-decoration: none;
    font-weight: bold;
    margin-right: 1rem;
}

.links-nav{
    position:absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
      color: var(--blue4);
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position:initial;
      margin:0;
      a{
        font-size: 1rem;
        color: red;
        display: inline;
      }
    }

}
.links-nav.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      color: #333;
    }

}
.burguer-button{
  @media(min-width:768px){
  display: none;
  }
}

`
export const Burguer = styled.div`
width: 35px;
height: 30px;
margin: 10px 10px;
position: relative;
cursor: pointer;
display: inline-block;

.nav-icon-8 span{
    background-color:#123546;
    position: absolute;
    border-radius: 2px;
    transition: .3s cubic-bezier(.8, .5, .2, 1.4);
    width:100%;
    height: 4px;
   
  }
  .nav-icon-8 span:nth-child(1){
    top:0px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(2){
    top:13px;
    left: 0px;
  }
  .nav-icon-8 span:nth-child(3){
    bottom:0px;
    left: 0px;
  }
  .nav-icon-8:not(.open):hover span:nth-child(1){
    transform: scaleX(.8);
  }
  .nav-icon-8:not(.open):hover span:nth-child(2){
    transform: scaleX(.5);
  }
  .nav-icon-8:not(.open):hover span:nth-child(3){
    transform: scaleX(.8);
  }
  .nav-icon-8.open span:nth-child(1){
    top: 13px;
  }
  .nav-icon-8.open span:nth-child(2){
    top:13px;
  }
  .nav-icon-8.open span:nth-child(3){
    top: 13px;
  }
  

`
