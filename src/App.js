import CharacterGrid from './components/CharacterGrid';
import React from 'react';
import SpaceshipPassengers from './components/SpaceshipPassengers';
import { myTestVar } from './client';

export default function App() {
  const myString = myTestVar().join(' * ');
  return (
    <>
      <div
        style={{
          padding: '24px 16px',
          border: '10px solid #92c5dd',
          borderRadius: '16px',
          marginBottom: '16px',
        }}
      >
        <h2 style={{ fontFamily: 'Helvetica' }}>Spaceship passengers</h2>
        <h4>{myString}</h4>
        <SpaceshipPassengers />
      </div>
      <CharacterGrid />
    </>
  );
}
