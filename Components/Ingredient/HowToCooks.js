import { HowToCook } from "../../Data/Data";
export const HowToCooks = () => (
  <div>
    {HowToCook.map((item, index) => {
      return (
        <div key={index}>
          <p className="text-xl font-bold pb-2">{item.step}</p>
          <p className="text-lg pb-2">{item.desc}</p>
        </div>
      );
    })}
  </div>
);

export default HowToCooks;
