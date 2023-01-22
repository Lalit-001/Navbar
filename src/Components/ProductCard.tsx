import React from "react";

const ProductCard = () => {
  return (
    <section className="flex flex-col w-72 items-start p-2">
      <div className="w-72 h-80">
        {" "}
        <img
          src="../src/assets/home-bg.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-semibold text-sm">Brand</span>
      <p className="text-xs font-paragraph text-gray-500 overflow-clip">
        Men's Purple Riot XXX Tentacion Graphic Printed Oversized T-shirt
      </p>
      <span className="font-bold">$688</span>
    </section>
  );
};

export default ProductCard;
