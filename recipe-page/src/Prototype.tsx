function Prototype() {
  return (
    <main className="flex flex-col items-center text-[14px] font-outfit text-[#5f564d]">
      <div className="rounded-xl overflow-hidden">
        <img
          src="./image-omelette.jpeg"
          alt="omelette-img"
          className="w-full rounded-xl"
        />
      </div>

      <div className="mt-6 space-y-6 max-w-[40ch]">
        <h1 className="font-young text-[2rem] text-black leading-tight ">
          Simple Omelette Recipe
        </h1>

        <p className="text-[#5f564d]">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="rounded-lg bg-[hsl(330,100%,98%)] h-[10rem]">
          <h2 className="text-[hsl(332,51%,32%)] font-semibold mb-2 text-lg">
            Preparation Time
          </h2>
          <div className="">
            <ul className="list-disc space-y-1 text-sm ">
              <li>
                <span className="font-semibold text-black">Total:</span>{" "}
                Approximately 10 minutes
              </li>
              <li>
                <span className="font-semibold text-black">Preparation:</span> 5
                minutes
              </li>
              <li>
                <span className="font-semibold text-black">Cooking:</span> 5
                minutes
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[#854632] text-xl font-semibold mb-2">
            Ingredients
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>2–3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <hr className="border-t border-[#e4ded8]" />

        <div>
          <h2 className="text-[#854632] text-xl font-semibold mb-4">
            Instructions
          </h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong className="text-[#854632]">Beat the eggs:</strong> In a
              bowl, beat the eggs with a pinch of salt and pepper until well
              mixed. You can add a tablespoon of water or milk for a fluffier
              texture.
            </li>
            <li>
              <strong className="text-[#854632]">Heat the pan:</strong> Place a
              non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <strong className="text-[#854632]">
                Cook the omelette:
              </strong>{" "}
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <strong className="text-[#854632]">
                Add fillings (optional):
              </strong>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <strong className="text-[#854632]">Fold and serve:</strong>{" "}
              Carefully lift one edge and fold it over the fillings. Let it cook
              for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong className="text-[#854632]">Enjoy:</strong> Serve hot, with
              additional salt and pepper if needed.
            </li>
          </ol>
        </div>

        <hr className="border-t border-[#e4ded8]" />

        <div>
          <h2 className="text-[#854632] text-xl font-semibold mb-2">
            Nutrition
          </h2>
          <p className="mb-2">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="w-full text-left text-sm">
            <tbody>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-semibold">Calories</td>
                <td className="py-2 text-[#854632] font-bold">277kcal</td>
              </tr>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-semibold">Carbs</td>
                <td className="py-2 text-[#854632] font-bold">0g</td>
              </tr>
              <tr className="border-b border-[#e4ded8]">
                <td className="py-2 font-semibold">Protein</td>
                <td className="py-2 text-[#854632] font-bold">20g</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold">Fat</td>
                <td className="py-2 text-[#854632] font-bold">22g</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Prototype;
