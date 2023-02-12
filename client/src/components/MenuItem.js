import React from "react";

function MenuItem({ id, name, price }) {
  return (
    <a href={`/menu_items/${id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
    </a>
  );
}

export default MenuItem;
