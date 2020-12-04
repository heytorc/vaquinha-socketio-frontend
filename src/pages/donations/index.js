import React, { useState, useEffect } from 'react';
import socketio from 'socket.io-client';
import { Link } from 'react-router-dom';

import { api } from '../../services/axios';

import { ReactComponent as CowIcon } from '../../assets/img/cow.svg';

import { Card } from '../../components/Card';

const socket = socketio(process.env.REACT_APP_API);

function Donations() {
  const [total, setTotal] = useState(localStorage.getItem('totalDonation') || 0);
  const [iconAnimate, setIconAnimate] = useState(false);

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {
    socket.on('Backend:DonationTotal', ({ total: totalDonations }) => {
      if (total !== totalDonations) {
        setTotal(totalDonations);
        localStorage.setItem('totalDonation', totalDonations);

        setIconAnimate(true);
        setTimeout(() => {setIconAnimate(false)}, 1100)
      }
    });
  }, [total]);

  async function getTotal() {
    const {data} = await api.get(`/vaquinha`);

    setTotal(data.total);
    localStorage.setItem('totalDonation', data.total);
  }

  return (
    <div className="container">
      <Card>
        <div className="header">
          <div className={`icon ${ iconAnimate ? 'animate' : '' }`}>
            <CowIcon />
          </div>
        </div>
        <div className="body">
          <p>Total arrecadado pela vaquinha</p>
          <h1 className={total > 0 ? 'success' : ''}><small>R$</small> {total.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h1>
        </div>
      </Card>
      <div className="navigation">
        <Link to='/donate'>
          💰 Quero doar também!
        </Link>
      </div>
    </div>
  );
}

export default Donations;
