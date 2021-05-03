import { IfFirebaseAuthedAnd } from '@react-firebase/auth';
import { FirestoreCollection } from '@react-firebase/firestore';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { addCometChatGroup } from '../cometchat';
import { withLayout } from '../wrappers/layout';

const ProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const createProductChatGroup = async (
    uid,
    ownerUID,
    title,
    image,
    productId
  ) => {
    const GUID = `${uid}-${ownerUID}-${productId}`;

    try {
      await addCometChatGroup(GUID, title, image, [uid, ownerUID]);
      history.push('/inbox');
    } catch (error) {
      console.log('Group creation failed with exception:', error);
    }
  };

  return (
    <FirestoreCollection
      limit={1}
      path="/products"
      where={{
        field: 'id',
        operator: '==',
        value: id,
      }}
    >
      {({ isLoading, value }) => {
        if (isLoading) {
          return <p>Loading...</p>;
        }

        const { image, title, price, description, ownerUID, id } = value[0];
        return (
          <div className="flex flex-col px-2 md:px-10">
            <div className="block md:grid grid-cols-11 py-4 gap-4 md:gap-6">
              <div className="col-span-5 bg-red-200">
                <img src={image} className="w-full" alt="Product"></img>
              </div>
              <div className="col-span-4">
                <div className="">
                  <p className="font-bold text-lg">{title}</p>
                  <div className="h-2 flex flew-row justify-start items-center my-2">
                    <svg
                      viewBox="0 0 120 16"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      className="h-2 overflow-visible"
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
                    <p className="text-blue-500 text-base">426 ratings</p>
                  </div>
                </div>
                <div className="border-b border-t my-2 py-2">
                  <p className="text-base text-gray-700 mb-1">
                    Price:{' '}
                    <span className="text-lg text-red-600 font-bold px-1">
                      {price}€
                    </span>
                    + Shipping fees to delivery
                  </p>
                  <p className="text-base">
                    Available at a lower price from other sellers that may not
                    offer free Prime shipping.
                  </p>
                </div>
                <div className="my-1 text-base">
                  <h4 className="font-bold">About this item</h4>
                  <p className="py-1">{description}</p>
                </div>
              </div>
              <div className="block col-span-2 p-3 rounded border border-gray-300 w-full">
                <p className="text-base text-gray-700 mb-1">
                  <span className="text-md text-red-600 font-bold pr-1">
                    {price}€
                  </span>
                  + Shipping fees to delivery
                </p>
                <div className="my-2">
                  <p className="text-gray-700 text-base py-1">
                    Arrives:{' '}
                    <span className="font-bold text-black">Tomorrow</span>
                  </p>
                  <div className="flex justify-start items-center">
                    <div className="h-4 w-4 flex justify-start items-center">
                      <svg
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        className="h-2 w-2 overflow-visible -mt-1"
                        style={{
                          fill: 'none',
                          stroke: '#000000',
                          strokeWidth: 1,
                        }}
                      >
                        <g fill="none">
                          <path d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-blue-400  text-base">
                      Deliver to Portugal
                    </p>
                  </div>
                </div>
                <p className="font-bold text-green-600 my-2">In Stock.</p>
                <select className="text-base bg-gradient-to-t from-gray-300 to-gray-100 rounded-lg border border-gray-400 shadow">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button
                  type="submit"
                  className="bg-gradient-to-t from-yellow-300 to-yellow-100 text-base p-1 w-full rounded-sm my-2 border border-gray-500"
                >
                  Add to Cart
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-t from-yellow-600 to-yellow-400 text-base p-1 w-full rounded-sm my-2 border border-gray-500"
                >
                  Buy now
                </button>

                <IfFirebaseAuthedAnd
                  filter={({ user }) => {
                    return ownerUID && user.uid !== ownerUID;
                  }}
                >
                  {({ user }) => (
                    <button
                      className="bg-gradient-to-t from-blue-400 to-blue-200 text-base p-1 w-full my-2 rounded-sm border border-gray-500 text-white"
                      onClick={() =>
                        createProductChatGroup(
                          user.uid,
                          ownerUID,
                          title,
                          image,
                          id
                        )
                      }
                    >
                      Chat with Seller
                    </button>
                  )}
                </IfFirebaseAuthedAnd>
              </div>
            </div>
          </div>
        );
      }}
    </FirestoreCollection>
  );
};

export default withLayout(ProductPage, { bgWhite: true });
