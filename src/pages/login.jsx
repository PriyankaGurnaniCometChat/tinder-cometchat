import React, { useReducer, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import { loginCometChatUser } from '../cometchat';
import { withLayout } from '../wrappers/layout';

const initialState = {
  email: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      throw new Error();
  }
};

const LoginPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleOnChange = (evt) => {
    const { target } = evt;
    dispatch({
      type: target.name,
      payload: target.value,
    });
  };

  const loginUser = async (evt) => {
    evt.preventDefault();

    try {
      const doc = await firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password);

      await loginCometChatUser(doc.user.uid);
      history.push('/discover');
    } catch (err) {
      setError(err.message);
      console.log(`Unable to login: ${err.message}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-gray-200 flex flex-col justify-center items-center mx-auto p-10 w-full md:w-7/12">
      <div className="flex flex-col justify-center items-center">
        <Link to="/">
          <svg
            className="w-10"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <defs>
              <radialGradient
                id="svg-fill-radial__tinder"
                cx="0.5"
                cy="1"
                fr="0"
                fx="0.5"
                fy="1"
                r="1"
                spreadMethod="pad"
              >
                <stop offset="0%" stopColor="#ff7854" />
                <stop offset="100%" stopColor="#fd267d" />
              </radialGradient>
            </defs>
            <path
              d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
              fill="url(#svg-fill-radial__tinder)"
              fillRule="nonzero"
            />
          </svg>
        </Link>
        <h3 className="text-2xl font-extrabold italic uppercase my-4">
          Get Started
        </h3>
        <div
          className="text-sm text-gray-800 text-center"
          data-nosnippet="true"
        >
          By clicking Log in, you agree to our
          {' '}
          <a
            className="underline focus-outline-style text-gray-600"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="open-in-new-window"
          >
            Terms
          </a>
          . Learn how we process your data in our
          {' '}
          <a
            className="underline focus-outline-style text-gray-600"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="open-in-new-window"
          >
            Privacy Policy
          </a>
          {' '}
          and
          {' '}
          <a
            className="underline focus-outline-style text-gray-600"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby="open-in-new-window"
          >
            Cookie Policy
          </a>
          .
        </div>
      </div>
      <div className="text-center w-full divide-y-2 divide-gray-100 divide-solid">
        <form className="my-5 w-full" onSubmit={loginUser}>
          {error && (
            <p className="text-red-500 font-bold text-base py-2 ">{error}</p>
          )}
          <label
            htmlFor="email"
            className="sr-only font-bold text-base md:ml-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={handleOnChange}
            value={state.email}
            className="my-5 appearance-none rounded-full relative block w-full py-3 px-4 font-bold border-2 border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            placeholder="Email"
          />
          <label
            htmlFor="password"
            className="sr-only font-bold text-base md:ml-1"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            required
            onChange={handleOnChange}
            value={state.password}
            className="my-5 appearance-none rounded-full relative block w-full py-3 px-4 font-bold border-2 border-gray-500 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-yellow-500 rounded-full hover:bg-gray-200 py-4 px-16 block whitespace-no-wrap text-white font-bold uppercase"
          >
            Continue
          </button>
        </form>
        <div className="py-4">
          <h3 className="text-2xl font-extrabold italic uppercase my-4">
            Get the app!
          </h3>
          <div className="flex justify-between items-center">
            <img width="130" src="/appStore.webp" alt="AppStore Download" />
            <img
              width="170"
              src="/playStore.webp"
              alt="PlayStore Download"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(LoginPage, { bgImage: true });
