import React from 'react';
import Button from './Button';

import style from'./App.css';

function App() {
  return (
    <>
      <h1 className={style.title}>
        hello React
      </h1>
      <Button/>
    </>
  );
}

export default App;
