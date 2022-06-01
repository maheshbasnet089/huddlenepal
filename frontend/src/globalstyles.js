const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
:root{
 /* Colors */
 --background: #eff7f9;
  --black:#0a0b10;
  --red:#FC3C3C;
  --gray : #797589;
  --searchIcon:#F9F9F9;
  --lightPink:#E33D3DCC;
  --white:#fff;
 
  --fontxs: 0.75em;
  --fontsm: 0.875em;
  --fontmd: 1em; // 1em = 16px
  --fontlg: 1.25em;
  --fontxl: 2em;
  --fontxxl: 3em;
  --fontxxxl: 4em;


}
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Barlow', sans-serif;
}
html{
  scroll-behavior:smooth;
  overflow-x : hidden ; 
}
    body,
    html,
    a {
        font-family: 'Barlow', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
    }
    a {
        font-family: 'Mulish', sans-serif;

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }

    *:focus {
        outline: none;
    }
    img{
        width : 100% ; 
        height : auto ;
    }
   


`;
