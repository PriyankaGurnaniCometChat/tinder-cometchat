import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from 'react-router-dom';
import { withLayout } from '../wrappers/layout';
import PersonSlider from '../components/PersonSlider';
import SideMatchList from '../components/SideMatchList';

const DiscoverPage = () => {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    likes = [], dislikes = [], favorites = [], id, name, imageUrl,
  } = JSON.parse(
    localStorage.getItem('user'),
  );

  useEffect(() => {
    firebase
      .firestore()
      .collection('users')
      .where('id', 'not-in', [id, ...likes, ...dislikes, ...favorites])
      .get()
      .then((querySnapshot) => {
        const newPersons = [];
        querySnapshot.forEach((person) => newPersons.push(person.data()));
        setPersons(newPersons);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 md:grid-cols-9 h-screen w-screen overflow-hidden">
      <div className="hidden md:block col-span-2 bg-pink-500 shadow-lg">
        <SideMatchList person={{ id, name, imageUrl }} />
      </div>
      <div className="flex flex-col items-center flex-grow w-full md:ml-4 col-span-3 md:col-span-7">
        <div className="pt-4 flex-none">
          <Link to="/">
            <svg
              className="w-10"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              role="presentation"
            >
              <path
                d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z"
                fill="#D3D3D3"
                fillRule="nonzero"
              />
            </svg>
          </Link>

        </div>
        <section className="flex my-auto">
          {loading && <h3>Loading</h3>}
          {!loading
            && <PersonSlider persons={persons} userId={id} />}
          <Link to="/inbox" className="block md:hidden absolute shadow-3xl inset-0 top-auto font-bold text-white flex items-center justify-center uppercase p-4 h-12 bg-gradient-to-r from-pink-600 via-pink-600 to-yellow-500">Inbox</Link>
        </section>
      </div>
    </div>
  );
};

export default withLayout(DiscoverPage, { hideNavbar: true });
