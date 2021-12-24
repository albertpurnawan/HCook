import { IngredientCard } from "../../Data/Data";
import Image from "next/image";
export const IngredientCards = () => (
  <div className="grid grid-cols-3 gap-8">
    {IngredientCard.map((item, index) => {
      return (
        <div
          className="flex flex-col p-8 m-6 border border-gray-700 rounded-xl"
          key={index}
        >
          <div className="w-full pt-2">
            <Image
              objectFit="fill"
              alt="logo"
              src={item.image}
              height="300"
              width="300"
              className="rounded-xl"
            />
          </div>
          <p className="text-xl">{item.name}</p>
          <div className="flex flex-row justify-between">
            <p>Weight</p>
            <p>{item.weight}g</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Price</p>
            <p>Rp. {item.price}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Quantity</p>
            <div className="flex flex-row justify-end">
              <div className="p-1">
                <button className="bg-red-400 rounded-full w-auto px-2.5 pb-1">
                  -
                </button>
              </div>
              <div className="p-1 ">
                <input
                  type="number"
                  placeholder="0"
                  min="1"
                  max="99"
                  maxLength="2"
                  className="w-4.5 h-6 text-center border-none bg-transparent outline-none appearance-none"
                />
              </div>
              <div className="p-1">
                <button className="bg-green-400 rounded-full w-auto px-2 pb-1">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default IngredientCards;
