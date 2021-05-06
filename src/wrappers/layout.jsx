/* eslint-disable import/prefer-default-export */
import React from 'react';
import Navbar from '../components/Navbar';

const withLayout = (
  BaseComponent,
  { hideNavbar = false, bgImage = false } = {},
) => (props) => (
  <>
    {!hideNavbar && <Navbar />}
    <main className="bg-gray-100">
      <div
        style={{
          backgroundImage: bgImage ? 'url("/bg.webp")' : 'none',
        }}
        className="w-full min-h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center"
      >
        {bgImage && (
          <div className="absolute inset-0 bg-black opacity-25 h-full flex flex-col z-0" />
        )}
        <div className="z-10">
          <BaseComponent {...props} />
        </div>
      </div>
    </main>
  </>
);

export { withLayout };
