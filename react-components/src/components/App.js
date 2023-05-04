import React from 'react';

import { HeaderComponent } from './Header.js';
import { CourseCardDeck } from './CourseCards.js';

export function App(props){
  return (
    <div>
      <HeaderComponent />
      <main className="container">
        <CourseCardDeck />
      </main>
    </div>
  )
}
