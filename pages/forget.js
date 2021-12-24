import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Link from "next/link";

export default function forget() {
  return (
    <div>
      <Header />
      <div className="h-screen">
        <div className="flex justify-center w-full">
          <div className="w-1/3 h-screen dark:bg-white bg-gray-800 dark:text-gray-600 text-white text-center">
            <p className="pt-20 pb-10 text-red-500 text-3xl font-extrabold">
              Reset password
            </p>
            <div className="w-full flex flex-col justify-items-center">
              <div>
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-white bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="example@example.com"
                />
              </div>
              <div className="pt-6">
                <Link href="/validasi" passHref>
                  <button
                    type="submit"
                    className="py-2 w-3/4 font-bold text-white bg-red-500 rounded-full hover:bg-blue-700"
                  >
                    Send
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
