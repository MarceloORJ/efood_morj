import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: ' #FFFFFF',
  red: '#E66767',
  roseLight: '#FFF8F2',
  rose: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`

  *{
    margin:0;
    padding:0px;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
  }

  .container{
    max-width:1024px;
    width:100%;
    margin: 0px auto;
  }
`
