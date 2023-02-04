import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --background-header: #ffffff;
    --blue1: #0077b9;
    --blue2: #34bacf;
    --blue3: #094f71;

    --grey: #bababa;
    --grey-light: #e5ecf7;
    --whiteTable: #f8f9fa;
    --yellow1:#fece47;
    --yellow2: #f2c447;
    --yellow3: #efb718;
    --yellow4: #c79300;
    --yellow5: #ffce45;

    --text: #8e8e8e;
    --textCotizar: #455a81;
    --text-mensual: #846e2d;
    --text-mensual-light: #fff3c9;

    --familyTitle: sofia_pro;
    --family-title2: proxima_nova_ltsemibold;
    --family-paragraph: sofia_pro_regular;
    --family-logo: Gotham_Rounded_Book;
    --familynumbers: sofia_pro_light;
}

*{
margin:0;
padding:0;
box-sizing:border-box
}

h1{
    color:var(--blue2);
    font-size:36px;
}

html{
    min-height:100%;
    background-color: var(--background);
}
`