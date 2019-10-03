import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline:  0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html,  body, #root{
    height: 100%;
    min-height: 100%;

  }


  body{
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #22202c, #402845);
  }

  body, input, button {
    /* font: 14px Arial, Helvetica, sans-serif; */

    font: 14px  'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }


  .Toastify__toast{
    border-radius: 4px !important;
  }
`;
