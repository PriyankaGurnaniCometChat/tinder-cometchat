import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({
  product: { image, title, price, id },
  bestSeller = false,
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="p-2 flex flex-col bg-white">
        {bestSeller && (
          <div className="bg-yellow-600 py-1 px-2 bo self-start text-base font-bold text-white">
            Best Seller
          </div>
        )}
        <img src={image} className="h-32 w-32 my-4"></img>
        <p className="text-base">{title}</p>
        <div className="h-2 w-2 flex justify-center items-center my-2">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="h-2 w-2 overflow-visible"
            style={{
              fill: '#FF9900',
              stroke: '#bd7100',
              strokeWidth: 1,
            }}
          >
            <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
            <path
              transform="translate(21)"
              d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
            />
            <path
              transform="translate(42)"
              d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
            />
            <path
              transform="translate(64)"
              d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
            />
            <path
              transform="translate(86)"
              d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
              fill="#f9de8c"
            />
            <path
              transform="translate(86)"
              d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792"
            />
          </svg>
        </div>
        <span className="text-sm leading-1">{price}€</span>
        <p className="text-base">
          Arrives: <span className="font-bold">Tomorrow</span>
        </p>
      </div>
    </Link>
  );
}
