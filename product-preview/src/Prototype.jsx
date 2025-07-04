import React from "react";

function Prototype() {
  return (
    <main className="sm:flex sm:justify-center bg-[hsl(0, 0%, 100%)] ">
      <div className="max-w-full ">
        <img
          src="image-product-desktop.jpg"
          alt="image-product-desktop"
          className="hidden md:block"
        />
        <img
          src="image-product-mobile.jpg"
          alt="image-product-mobile"
          className="block sm:hidden"
        />
      </div>
      <div>
        <h3>PERFUME</h3>
        <h1 className="font-fraunces font-extrabold text-3xl ">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <h2>$149.99</h2>
          <h4>$169.99</h4>
        </div>

        <button>
          <img src="./icon-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default Prototype;
