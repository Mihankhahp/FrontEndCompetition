import React from "react";

export default function Product({ product }) {
  return (
    <div class="w-auto p-1 flex items-center ">
      <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href={product.url}>
          <img
            class="rounded-t-lg p-8 "
            src={product.image_url}
            alt={product.name}
          />
        </a>
        <div class="px-5 pb-5 self-end">
          <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white text-2xl mb-2">
            {product.name}
          </h3>
          <div class="flex items-center mt-2.5 mb-5 ">
            <h6>{product.description}</h6>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>
            <a
              href={product.url}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
