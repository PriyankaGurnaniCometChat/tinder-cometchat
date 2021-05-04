import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function SideMatchList({ person }) {
  const [matches, setMatches] = useState([]);
  const { id, name, imageUrl } = person;

  useEffect(() => {
    const matchListener = firebase.firestore().collection('/users').doc(id).onSnapshot((doc) => {
      const currentMatchIds = doc.data().matches || [];
      firebase
        .firestore()
        .collection('users')
        .where('id', 'in', [...currentMatchIds, id]) // non-empty array required
        .get()
        .then((querySnapshot) => {
          const newMatches = [];
          querySnapshot.forEach((match) => {
            if (match.id !== id) {
              newMatches.push(match.data());
            }
          });
          setMatches(newMatches);
        });
    });
    return () => {
      matchListener();
    };
  }, []);

  return (
    <aside className="flex flex-col w-full h-full">
      <div className="flex items-center justify-start p-4 h-12 bg-gradient-to-r from-pink-600 via-pink-600 to-yellow-500">
        <img src={imageUrl} className="h-8 w-8 border-2 border-white rounded-full shadow-md object-cover" alt="User Avatar" />
        <p className="ml-4 text-white font-bold text-md">{name}</p>
      </div>
      <div className="p-2 lg:p-4 bg-gray-200 flex items-center justify-around">
        <div className="rounded-full border-2 mr-4 border-pink-600 bg-white h-20 w-20" />
        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-600">Discover New Matches</p>
          <p className="text-gray-500 text-md">Start rating to connect with new people!</p>
        </div>
      </div>
      <Link className="relative bg-white flex-1 group hover:cursor-pointer" to="/inbox">
        <div className="hidden inset-0 bg-black opacity-25 absolute group-hover:block transition-all duration-500" />
        <div to="/inbox" className="hidden bottom-0 w-full pb-4 text-center absolute group-hover:block transition-all duration-500 shadow-3xl inset-0 top-auto font-bold text-white flex items-center justify-center uppercase p-4 h-12 bg-gradient-to-r from-pink-600 via-pink-600 to-yellow-500">Inbox</div>

        <div className=" p-4">
          {matches.length === 0 && <p className="text-gray-400">Still no matches were found :/</p>}
          {matches.length > 0
        && (
        <>
          <h3 className="font-bold text-pink-500 mr-auto">Matches</h3>
          <div className="flex flex-col justify-center items-center">
            {React.Children.toArray(matches.map((match) => (
              <div className="w-full my-2 flex justify-start items-center">
                <img src={match.imageUrl} className="rounded-full h-20 w-20 shadow" alt="Match Person" />
                <div className="">
                  <p className="ml-4 font-bold text-gray-600">{match.name}</p>
                  <p className="ml-4 text-gray-400 text-sm tracking-tight leading-tight">
                    You have connected with
                    {' '}
                    {match.name}
                  </p>
                </div>
              </div>
            )))}
          </div>
        </>
        )}
        </div>
      </Link>
    </aside>
  );
}
