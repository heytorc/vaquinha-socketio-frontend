import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;

    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
    height: 100vh;
  }

  .container a {
    text-decoration: none;
    color: var(--white);
    font-weight: 600;
  }
  
  .container a:hover {
    color: var(--black)
  }

  .container .navigation {
    margin: 20px auto;
  }

  :root {
    --primary: #8065AB;
    --success: #00B050;
    --error: #DE4547;
    --black: #212121;
    --white: #fff;
  }
`;