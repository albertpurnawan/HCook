import Image from "next/image";
import Link from "next/link";
import image from "../public/Images/carbonara.jpeg";
import { Layout } from "../Layout/After";
import IngredientList from "../Components/Ingredient/IngredientLists";
import HowToCooks from "../Components/Ingredient/HowToCooks";
import IngredientCards from "../Components/Ingredient/IngredientCards";
export default function Detail() {
  return (
    <Layout>
      <div
        className="mx-8 p-6 border-2 border-gray-700 rounded-xl"
        data-aos="zoom-in"
      >
        <p className="text-5xl pb-8 text-center">Carbonara Spaghetti</p>
        <div className="flex flex-row">
          <div className="flex flex-col pr-8">
            <Image
              objectFit="fill"
              alt="logo"
              src={image}
              height="400"
              width="400"
              className="rounded-xl"
            />
            <p className="text-4xl pt-6 pb-4">Ingredients</p>
            <IngredientList />
          </div>
          <div className="w-7/12">
            <p className="text-4xl pb-4">How to cook</p>
            <HowToCooks />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-center" data-aos="zoom-in">
        <p className="text-4xl pb-4 pt-8">Ingredients</p>
        <IngredientCards />
        <div className="flex flex-row justify-end pt-10 pr-8">
          <Link href="/checkout" passHref>
            <button className="bg-green-400 rounded-xl px-5 py-3 ">
              <p className="fas fa-shopping-cart pr-5" />
              Check out
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
