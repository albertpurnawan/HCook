import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Link from "next/link";

export default function signup() {
  return (
    <div>
      <Header />
      <div className="h-full">
        <div className="flex justify-center w-full">
          <div className="w-1/3 h-full pb-10 dark:bg-white bg-gray-800 shadow-5xl dark:text-gray-600 text-white text-center">
            <p className="pt-20 pb-10 text-red-500 text-3xl font-extrabold">
              Sign up
            </p>
            <div className="w-full flex flex-col justify-items-center">
              <div>
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Username"
                />
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Email"
                />
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Phone number"
                />

                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="password"
                  autoComplete="name"
                  required
                  placeholder="Password"
                />
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-gray-800 dark:text-gray-600 text-white w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="password"
                  autoComplete="name"
                  required
                  placeholder="Confirm password"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-wrap justify-between w-3/4">
                  <div className="flex flex-wrap">
                    <label
                      htmlFor="name"
                      className="text-white dark:text-gray-600"
                    >
                      <input id="checkbox" type="checkbox" className="mr-2" />I
                      Agree with <a className="text-red-500">privacy</a> and{" "}
                      <a className="text-red-500">policy</a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/validasi" passHref>
                  <button
                    type="submit"
                    className="py-2 w-3/4 font-bold text-white bg-red-500 rounded-full hover:bg-blue-700"
                  >
                    Sign up
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
