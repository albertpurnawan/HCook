import { IngredientList } from "../../Data/Data";
export const IngredientLists = () => (
  <div>
    {IngredientList.map((item, index) => {
      return (
        <div className="flex flex-row justify-between" key={index}>
          <p className="text-xl pb-2">{item.nameIngredient}</p>
          <p className="text-xl pb-2">{item.weight}</p>
        </div>
      );
    })}
  </div>
);

export default IngredientLists;
