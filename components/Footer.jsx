import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>©2022 Bonbon Deb's - Tous droits réservés</p>
      <div className='legal'> 
      <button>mentions légales</button> 
      <button>Conditions générales d'utilisation</button> 
      <button>Conditions générales de vente</button>
      </div>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  )
}

export default Footer