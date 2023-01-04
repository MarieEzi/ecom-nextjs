import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Sidebar from '../components/Sidebar';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className='profile-container'>

<h1>Mon compte</h1>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div className="left-side">
          <Sidebar/> 
        </div>

        <div className="right-side">
          
        </div>
       


        
      </div>
    )
  )
}