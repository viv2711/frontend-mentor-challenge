function App() {
  return (
    <main className="bg-white flex flex-col sm:max-w-[43.75rem] sm:justify-center sm:items-center sm:rounded-[0.5rem] font-outfit pb-[2rem] sm:my-[2rem]">
      <img
        src="./image-omelette.jpeg"
        alt="omelette-img"
        className="max-w-full sm:w-[40.625rem] sm:rounded-l sm:mt-[1.5rem]"
      />

      <div className="mx-[30px] mt-[2rem] sm:mt-[1.5rem]">
        <h1 className="font-young text-[2rem] text-black leading-[2rem]  ">
          Simple Omelette Recipe
        </h1>

        <p className="text-[#5f564d] mt-[1rem]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      {/** Preaparation Time Section */}
      <div className="rounded-lg sm:self-start sm:min-w-[40rem] bg-[hsl(330,100%,98%)] h-[10rem] mx-[1.875rem] py-[1rem] mt-[2rem]">
        <h2 className="text-[hsl(332,51%,32%)] mb-2 text-lg font-bold mx-[2rem]">
          Preparation time
        </h2>
        <div className="mx-[3rem] ">
          <ul className="list-disc space-y-1 text-sm text-gray-500 marker:text-[hsl(332,51%,32%)]">
            <li className="mb-2">
              <span className=" text-gray-600 font-bold">Total:</span>{" "}
              Approximately 10 minutes
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-bold">Preparation:</span> 5
              minutes
            </li>
            <li className="mb-2">
              <span className="text-gray-600 font-bold">Cooking:</span> 5
              minutes
            </li>
          </ul>
        </div>
      </div>

      {/** Ingredients Section */}
      <div className="self-start mx-[30px] mt-[30px] text-gray-500 ">
        <h2 className="text-[#854632] text-xl text-[2rem] mb-2 font-young">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 space-y-1 marker:text-[#854632] ">
          <li className="pl-5">2–3 large eggs</li>
          <li className="pl-5">Salt, to taste</li>
          <li className="pl-5">Pepper, to taste</li>
          <li className="pl-5">1 tablespoon of butter or oil</li>
          <li className="pl-5">
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>

      <div className="border-t border-[#e4ded8] my-[30px] mx-[1.875rem] sm:min-w-[39rem] sm:self-start " />

      {/** Instructions Section */}
      <div className="self-start mx-[30px] text-gray-500 ]">
        <h2 className="text-[#854632] text-xl text-[2rem] mb-2 font-young">
          Instructions
        </h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline ">Beat the eggs:</p> In
            a bowl, beat the eggs with a pinch of salt and pepper until well
            mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline">Heat the pan:</p>{" "}
            Place a non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline">
              Cook the omelette:
            </p>{" "}
            Once the butter is melted and bubbling, pour in the eggs. Tilt the
            pan to ensure the eggs evenly coat the surface.
          </li>
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline">
              Add fillings (optional):
            </p>{" "}
            When the eggs begin to set at the edges but are still slightly runny
            in the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline">
              Fold and serve:
            </p>{" "}
            Carefully lift one edge and fold it over the fillings. Let it cook
            for another minute, then slide it onto a plate.
          </li>
          <li className="pl-5">
            <p className="text-gray-600 font-bold inline">Enjoy:</p> Serve hot,
            with additional salt and pepper if needed.
          </li>
        </ol>
      </div>

      <div className="border-t border-[#e4ded8] my-[30px] mx-[1.875rem] sm:min-w-[39rem] sm:self-start " />

      {/** Nutrition table */}
      <div className="self-start mx-[30px] mt-0 text-gray-500">
          <h2 className="text-[#854632] text-xl text-[2rem] mb-2 font-young">
            Nutrition
          </h2>
          <p className="mb-2">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full text-left text-sm ">
            <tbody>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-medium pl-5 ">Calories</td>
                <td className="py-2 text-[#854632] font-bold">277kcal</td>
              </tr>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-medium pl-5 ">Carbs</td>
                <td className="py-2 text-[#854632] font-bold">0g</td>
              </tr>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-medium pl-5 ">Protein</td>
                <td className="py-2 text-[#854632] font-bold">20g</td>
              </tr>
              <tr>
                <td className="py-2 font-medium pl-5 ">Fat</td>
                <td className="py-2 text-[#854632] font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
    </main>
  );
}

export default App;
