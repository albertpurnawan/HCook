import Image from "next/image";
import Link from "next/link";
import { DataLanding } from "../../Data/Data";
export const LandingCard = () => (
  <div className="grid grid-cols-3 gap-8 p-8">
    {DataLanding.map((item, index) => {
      return (
        <div key={index}>
          <Link href="/detail" passHref>
            <div
              className="transform w-full transition duration-500 bg-gray-100 rounded-xl hover:scale-125 hover:bg-gray-300"
              data-aos="zoom-in"
            >
              <Image
                objectFit="fill"
                alt="logo"
                src={item.image}
                height="400"
                width="400"
                className="rounded-xl"
              />
              <p className="text-2xl pb-4 text-center text-gray-800">
                {item.name}
              </p>
              <div className="flex flex-row justify-start">
                <p className="text-xl pt-1.5 px-2 fas fa-heart text-red-500" />
                <p className="text-xl pb-4 text-left text-gray-800">
                  | {item.likes} Liked
                </p>
              </div>
              <div className="flex flex-row justify-start">
                <p className="text-xl pt-1.5 px-2 fas fa-star text-yellow-400" />
                <p className="text-xl pb-4 text-left text-gray-800">
                  {item.rating} | {item.sold} Sold
                </p>
              </div>
            </div>
          </Link>
        </div>
      );
    })}
  </div>
);

export default LandingCard;
