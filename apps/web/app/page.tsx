'use client';

import { anyFunction } from 'leezer-ui';
import { useEffect } from 'react';
import { Button, Header } from 'ui';

export default function Page() {
  return (
    <>
      <Header text='Web' />
      <Button />
      <button
        className='border-4 text-green-400'
        onClick={() => alert('Beep Bootp')}
      >
        New Button
      </button>
    </>
  );
}
