function App() {
  return (
    <main className="sm:flex sm:justify-center sm:w-[40.625rem] overflow-hidden w-[22rem] rounded-[0.5rem] bg-white font-montserrat">
      <div className="sm:w-[21.875rem] ">
        <img
          src="image-product-desktop.jpg"
          alt="image-product-desktop"
          className="hidden sm:block "
        />
        <img
          src="image-product-mobile.jpg"
          alt="image-product-mobile"
          className="block sm:hidden "
        />
      </div>
      <div className="p-8 sm:w-[21.875rem] flex flex-col">
        <h3 className="text-grey text-sm tracking-[0.5rem] mb-[1rem]">
          PERFUME
        </h3>
        <div className="sm:w-[15rem] mb-[2rem]">
          <h1 className="font-fraunces font-extrabold text-[2rem] leading-9  mb-[1.25rem] ">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-grey">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
        </div>
        <div className="flex items-center mb-[2rem]">
          <h2 className="text-green-500 font-fraunces font-extrabold text-3xl">$149.99</h2>
          <p className="text-grey line-through ml-[1.5rem]">$169.99</p>
        </div>

        <button type="button" className="bg-green-500 hover:bg-green-700 w-full flex items-center justify-center self-center text-white py-4 rounded-xl cursor-pointer">
          <img src="./icon-cart.svg" alt="" className="mr-[0.5rem]"/>
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default App;
