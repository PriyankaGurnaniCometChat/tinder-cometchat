import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category: { name, image } }) {
  return (
    <div className="bg-white w-full h-full p-4">
      <p className="font-bold capitalize">{name}</p>
      <Link to={`/category/${name}`} className="text-base text-blue-500">
        <img
          src={image}
          alt={name}
          className="w-48 h-48 my-4 lg:my-6 mx-auto"
        />
        <p>Shop now</p>
      </Link>
    </div>
  );
}
