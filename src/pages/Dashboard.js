import React from 'react';
import { useUser } from '../UserContext';

function Dashboard() {
  const { userData } = useUser();

  return (
    <div className="flex justify-center items-center text-white text-3xl h-full">
      Welcome to the Internship Program!!
      <br/>
      <br/>
      <h1 class="text-4xl font-bold uppercase">Email id is</h1>
      <div className='bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500'>{userData.email}</div>

      <br/>
      <h1 class="text-4xl font-bold uppercase">Password  is</h1>
      <div >{userData.password}</div>
    </div>
  );
}

export default Dashboard;
