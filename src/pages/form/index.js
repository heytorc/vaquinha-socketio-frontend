import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../../components/Card';
import { MoneyInput, Button } from '../../components/Form';

import { ReactComponent as CoinsIcon } from '../../assets/img/coins.svg';

import './styles.css';

import { api } from '../../services/axios';

export default function FormDonation() {
  const [value, setValue] = useState(0);
  const [feedback, setFeedback] = useState({ type: null, message: null });

  const changeValue = useCallback((event, maskedvalue, floatvalue) => {
    setValue(floatvalue);
  }, []);

  const resetMessage = useCallback(() => {
    setFeedback({
      type: null,
      message: null
    });
  }, []);

  const handleDonationSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    resetMessage();

    if (value <= 0) {
      setFeedback({
        type: 'error',
        message: 'Digite um valor maior quê R$ 0,00! 😊'
      });
      return;
    }

    try {
      await api.post(`/vaquinha/store`, { value });

      setValue(0);

      setFeedback({
        type: 'success',
        message: 'Obrigado pela sua contribuição! 👏'
      });
    } catch(error) {
      setFeedback({
        type: 'error',
        message: 'Não foi possível registra sua contribuição! 😭'
      });
    }

    setTimeout(() => {
      resetMessage();
    }, 3000);
  }, [value, resetMessage])

  return (
    <div className="container">
      <Card>
        <div className="header">
          <div className={`icon`}>
            <CoinsIcon />
          </div>
        </div>
        <div className="body">
          <form onSubmit={handleDonationSubmit}>
            <p>Digite qualquer valor para doar</p>
            <MoneyInput
              decimalSeparator=","
              thousandSeparator="."
              value={value}
              onChangeEvent={changeValue}
              autoFocus
            />
            <Button type="submit">Doar</Button>

            {feedback.type && (
              <div className={`feedback-message ${feedback.type}`}>
                {feedback.message}
              </div>
            )}
          </form>
        </div>
      </Card>
      <div className="navigation">
        <Link to='/'>
          👈 Ver Arrecadação
        </Link>
      </div>
    </div>
  );
}