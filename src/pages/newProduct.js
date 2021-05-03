import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirestoreCollection } from '@react-firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  title: '',
  description: '',
  category: '',
  image: '',
  price: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.payload };
    case 'description':
      return { ...state, description: action.payload };
    case 'category':
      return { ...state, category: action.payload };
    case 'image':
      return { ...state, image: action.payload };
    case 'price':
      return { ...state, price: action.payload };
    case 'reset':
      return { ...action.payload };
    default:
      throw new Error();
  }
};

export default function NewProductPage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState('');

  const handleOnChange = (evt) => {
    const { target } = evt;
    dispatch({
      type: target.name,
      payload: target.value,
    });
  };

  const createProduct = (evt) => {
    evt.preventDefault();

    const currentUserUID = firebase.auth().currentUser.uid;

    firebase
      .firestore()
      .collection('/products')
      .add({
        ...state,
        ownerUID: currentUserUID,
        id: uuidv4(),
      })
      .then(() => {
        dispatch({
          type: 'reset',
          payload: initialState,
        });
      })
      .catch((err) => {
        setError(err.message);
        console.log(`Unable to login: ${err.message}`);
      });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center mx-auto px-2 py-2 border-gray-700 w-full md:w-96">
        <div className="inline-flex">
          <Link to="/">
            <img src="/logo-black.png" className="w-24" alt="Logo"></img>
          </Link>
        </div>
        <form
          className="border-gray-300 border rounded-sm my-4 p-4 w-full"
          onSubmit={createProduct}
        >
          <h1 className="font-bold">New Product</h1>
          {error && (
            <p className="text-red-500 font-bold text-base py-2 ">{error}</p>
          )}
          <label htmlFor="title" className="font-bold text-base ml-1">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="title"
            autoComplete="title"
            required
            onChange={handleOnChange}
            value={state.title}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Title"
          />
          <label htmlFor="description" className="font-bold text-base ml-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            autoComplete="description"
            required
            onChange={handleOnChange}
            value={state.description}
            rows={4}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Description"
          />
          <label htmlFor="image" className="font-bold text-base ml-1">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            autoComplete="image"
            required
            onChange={handleOnChange}
            value={state.image}
            className="appearance-none rounded-sm relative block w-full p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="https://..."
          />
          <label htmlFor="category" className="font-bold text-base ml-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            required
            onChange={handleOnChange}
            value={state.category}
            className="capitalize appearance-none rounded-sm relative block w-1/2 p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
          >
            <option className="capitalize" value="">
              Please select one
            </option>
            <FirestoreCollection path="/categories">
              {({ isLoading, value }) => {
                return (
                  !isLoading &&
                  React.Children.toArray(
                    value.map((category) => {
                      return (
                        <option className="capitalize" value={category.name}>
                          {category.name}
                        </option>
                      );
                    })
                  )
                );
              }}
            </FirestoreCollection>
          </select>
          <label htmlFor="price" className="font-bold text-base ml-1">
            Price (€)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            min={1}
            required
            onChange={handleOnChange}
            value={state.price}
            className="appearance-none rounded-sm relative block w-1/2 p-1 border border-gray-400 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-base"
            placeholder="Price per unit"
          />
          <button
            type="submit"
            className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-base p-1 w-full rounded-sm my-3 border border-gray-500"
          >
            Continue
          </button>
          <p className="text-base tracking-none">
            By continuing, you agree to Amazon's{' '}
            <a href="#" className="text-blue-500">
              Conditions of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500">
              Privacy Notice
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
