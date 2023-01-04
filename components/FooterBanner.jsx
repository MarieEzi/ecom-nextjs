import React from 'react';
import { AiOutlineCreditCard, AiOutlineCar, AiOutlineMail } from 'react-icons/ai';

const FooterBanner = () => {
  return (
    <div className="footer-banner-container">
      <div className='container'> 
    <div className="services">
        <div className="card">
            <div className="content">
                <div className="icon"><AiOutlineCar /></div>
                <div className="title">LIVRAISON GRATUITE</div>
                <p className='desc'>Livraison offerte à partir de 30€</p>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="icon"><AiOutlineCreditCard /></div>
                <div className="title">PAIEMENT SÉCURISÉ</div>
                <p className='desc'>Paiement possible par CB et PAYPAL</p>
            </div>
        </div>
        <div className="card">
            <div className="content">
                <div className="icon"><AiOutlineMail /></div>
                <div className="title">SERVICE CLIENT </div>
                <p className='desc'>appel du lundi au vendredi de 9h à 12h et par mail: contact@bonbondebs.fr</p>
            </div>
        </div>
        </div>
        </div>
        </div>
  )
}

export default FooterBanner