import React from 'react';
import Image from 'next/image';
import logo from './../images/logo.png';
import { AiOutlineLogout, AiOutlineLogin, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import  Cart  from './../components/Cart';
import { useStateContext } from '../context/StateContext';
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0';

export default function Navbar () {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, loading } = useUser();
  const router = useRouter()

  if (loading) return <div>loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="navbar-container">
      <div className="logo">
      <button type="button" onClick={() => router.push('/')}><Image src={logo} alt='logo'></Image></button>
      </div>

      <div>
        {!user && (

          <div className='myButton1'><a href="/api/auth/login" ><AiOutlineLogin />Connexion</a></div>
        )}

        {user && (
          <div className='logout'>

            <div><h2> Bonjour, {user.name}!</h2></div>
            <div ><button type="button" className='myButton3' onClick={() => router.push('/profile')}><a ><AiOutlineUser />mon compte</a></button></div>
            <div className='myButton2'><a href="/api/auth/logout"><AiOutlineLogout />Déconnexion</a></div>

          </div>
        )}
      </div>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}

    </div>
  )
}

 