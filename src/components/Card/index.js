import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  min-height: 320px;

  padding: 20px;
  border-radius: 8px;

  background: var(--black);
  color: var(--white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .header {

  }

  & p {
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 50px;
  }

  & h1.success {
    color: var(--success);
  }

  & h1 > small {
    font-size: 20px;
    color: var(--white) !important;
  }

  & .header {
    width: 100%;
    position: relative;

    display: flex;
    justify-content: center;  
  }

  & .body {
    width: 100%;
    height: 100%;
    position: relative;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;  
  }

  .icon {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
  }

  @keyframes jump {
    0%   {top: -80px;}
    50%  {top: -83px; transform: scale(1.05);}
    100% {top: -80px; transform: scale(1);}
  }

  .icon.animate {
    animation-name: jump;
    animation-duration: 0.5s;
  }

  .feedback-message {
    width: 100%;
    padding: 10px;
    border-radius: 8px;

    font-size: 13px;
    text-align: center;

    margin: 20px auto;

    position: absolute;
    bottom: -20px;
  }
  
  .feedback-message.success {
    border: 2px solid var(--success);

    font-weight: 600;
    color: var(--success);
    bottom: -15px;
  }
  
  .feedback-message.error {
    border: 2px solid var(--error);

    font-weight: 600;
    color: var(--error);
    bottom: -20px;
  }
`;