import React from "react";
import Product from "./Product/Product";

export default function Products({ products, isLoading }) {
  // console.log("This is data in Products ", products);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Online Shop{" "}
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 h-">
          {products &&
            products.map((product) => (
              <Product key={products.page_id} product={product} />
            ))}
        </div>
      </div>
      {isLoading && (
        <div className="flex items-center justify-center space-x-2">
          <div
            className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div
            className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
