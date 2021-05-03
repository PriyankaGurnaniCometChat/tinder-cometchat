import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductSlider({ title, products }) {
  return (
    <div className="bg-white p-4">
      <span className="font-bold text-md text-gray-600 mr-4">{title}</span>
      <a href="#" className="text-base text-blue-500">
        Shop now
      </a>
      <div
        style={{
          gridTemplateColumns: `repeat(${products.length}, calc(20% - 1rem * ${
            2 / window.innerWidth
          }))`,
        }}
        className={`grid gap-2 md:gap-4 grid-rows-1 overflow-x-scroll whitespace-nowrap my-4`}
      >
        {React.Children.toArray(
          products.map((product) => (
            <Link to={`/product/${product.id || 1}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-24 md:w-24 md:my-3"
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
