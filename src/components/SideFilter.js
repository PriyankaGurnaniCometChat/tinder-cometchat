import React from 'react';

export default function SideFilter() {
  return (
    <fieldset className="w-full border-r border-gray-300 h-full">
      <section className="my-1">
        <h3 className="text-base font-bold">Featured Brands</h3>
        <ul className="p-2">
          <li className="flex items-center">
            <input type="checkbox" value="Mika" className="mr-1 h-3 w-3" />
            <span className="text-base">Mika</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" value="Carver" className="mr-1 h-3 w-3" />
            <span className="text-base">Carver</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              value="Rush Hills"
              className="mr-1 h-3 w-3"
            />
            <span className="text-base">Rush Hills</span>
          </li>
          <li className="flex items-center">
            <input type="checkbox" value="Healy" className="mr-1 h-3 w-3" />
            <span className="text-base">Healy</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              value="Holmes Cano"
              className="mr-1 h-3 w-3"
            />
            <span className="text-base">Holmes Cano</span>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              value="Bain Kline"
              className="mr-1 h-3 w-3"
            />
            <span className="text-base">Bain Kline</span>
          </li>
        </ul>
      </section>
      <section className="my-1">
        <h3 className="text-base font-bold">Avg. Rating</h3>
        <ul className="p-2">
          <li className="flex items-center mb-2">
            <div className="h-2 flex-grow flex items-center">
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
              </svg>
              <p className="text-base">& Up</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <div className="h-2 flex-grow flex items-center">
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
                  fill="#f9de8c"
                />
                <path
                  transform="translate(86)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
              </svg>
              <p className="text-base">& Up</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <div className="h-2 flex-grow flex items-center">
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
                  fill="#f9de8c"
                />
                <path
                  transform="translate(64)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
                <path
                  transform="translate(86)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
              </svg>
              <p className="text-base">& Up</p>
            </div>
          </li>
          <li className="flex items-center mb-2">
            <div className="h-2 flex-grow flex items-center">
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
                  fill="#f9de8c"
                />
                <path
                  transform="translate(42)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
                <path
                  transform="translate(64)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
                <path
                  transform="translate(86)"
                  d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218"
                  fill="#f9de8c"
                />
              </svg>
              <p className="text-base">& Up</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="my-1">
        <h3 className="text-base font-bold">Condition</h3>
        <ul className="p-2">
          <li className="flex items-center">
            <span className="text-base">New</span>
          </li>
          <li className="flex items-center">
            <span className="text-base">Used</span>
          </li>
          <li className="flex items-center">
            <span className="text-base">Renewed</span>
          </li>
        </ul>
      </section>
      <section className="my-1">
        <h3 className="text-base font-bold">New & Upcoming</h3>
        <ul className="p-2">
          <li className="flex items-center">
            <span className="text-base">New Arrivals</span>
          </li>
          <li className="flex items-center">
            <span className="text-base">Coming Soon</span>
          </li>
        </ul>
      </section>
    </fieldset>
  );
}
