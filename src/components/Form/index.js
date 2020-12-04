import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';

export const MoneyInput = styled(CurrencyInput)`
  width: 100%;
  padding: 10px;
  
  border-radius: 4px;
  border: 3px solid var(--black);
  
  background: var(--white);

  transition: 0.1s ease-in-out;

  margin-bottom: 15px;

  &:focus {
    outline: none;
    border: 3px solid var(--primary);
    transition: 0.5s ease-in-out;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  background: var(--primary);

  font-weight: 600;
  color: var(--white);
  
  padding: 10px;

  transition: 0.5s linear;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.8);
    transition: 0.5s linear;
  }
`;