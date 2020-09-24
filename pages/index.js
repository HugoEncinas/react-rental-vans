import React from 'react';
import Header from '../components/Header'
import RentalList from '../components/RentalList'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <Header/>
      <RentalList/>
    </div>
  );
}
