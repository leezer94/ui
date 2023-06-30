'use client';

import * as React from 'react';

export const Button = () => {
  return (
    <button
      className='h-[100px] w-[300px] border-2 text-red-300'
      onClick={() => alert('boop')}
    >
      Boop
    </button>
  );
};
