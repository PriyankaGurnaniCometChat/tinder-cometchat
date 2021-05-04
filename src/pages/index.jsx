import { FirebaseAuthConsumer } from '@react-firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import { withLayout } from '../wrappers/layout';

const IndexPage = () => (
  <section className="flex flex-col items-center w-full">
    <h1 className="text-4xl mb-6 md:text-9xl text-white font-bold tracking-thin">
      Swipe Right
      <span className="font-light">&reg;</span>
    </h1>
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => (
        <Link
          className="bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full hover:bg-gray-200 py-4 px-16 block whitespace-no-wrap text-white font-bold uppercase"
          to={isSignedIn ? '/discover' : '/register'}
        >
          {isSignedIn ? 'Discover' : 'Create Account'}
        </Link>
      )}
    </FirebaseAuthConsumer>
  </section>
);

export default withLayout(IndexPage, { bgImage: true });
