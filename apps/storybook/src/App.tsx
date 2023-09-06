'use client';

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './global.css';
import { Button } from 'ui/src/components/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='border-red-600 border-2'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <div></div>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <Button
          variant='destructive'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
