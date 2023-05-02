import React from 'react';
import ReactDOM from 'react-dom/client';

const messageString = "I am variable";

const imgUrl = "something.png";

//define the page
const page = (
  <div>
    <header>
      <h1>{messageString}</h1>
      <p>Now we're working with JSX!</p>
    </header>
    <main>
      <p>lorem ipsum</p>
      {/* do some math */}
      <img src={"path/to/"+imgUrl} alt="borken image"/>
    </main>
  </div>  
);


//Create a "React root" out of the `#root` elemment
//then render the React element at that root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(page)