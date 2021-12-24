import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Link from "next/link";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import { GoogleLogin } from "react-google-login";

const axiosApiCall = (url, method, body = {}) =>
  axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
    data: body,
  });

export default function Home() {
  const router = useRouter();

  const onSuccess = (response) => {
    const access_token = response.accessToken;
    axiosApiCall("oauth/google", "post", { access_token }).then((res) => {
      const { user, token } = res.data;
      Cookie.set("token", token);
      router.push("/home");
    });
  };

  return (
    <div>
      <Header />
      <div className="h-full">
        <div className="flex justify-center w-full">
          <div className="w-1/3 h-full pb-10 dark:bg-white bg-gray-200 shadow-5xl text-center ">
            <p className="pt-20 pb-10 text-red-500 text-3xl font-extrabold">
              Sign in
            </p>
            <div className="w-full flex flex-col justify-items-center">
              <div>
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-white text-gray-600  w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="example@example.com"
                />
                <input
                  className="py-2 px-2 mb-4 border-b-2 dark:bg-gray-200 bg-white text-gray-600  w-3/4 rounded-lg"
                  id="name"
                  name="name"
                  type="password"
                  autoComplete="name"
                  required
                  placeholder="password"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-wrap justify-between w-3/4">
                  <div className="flex flex-wrap">
                    <label htmlFor="name" className="text-gray-600">
                      <input id="checkbox" type="checkbox" />
                      Remember me
                    </label>
                  </div>
                  <a className="text-red-500">Forget Password?</a>
                </div>
              </div>
              <div className="pt-6">
                <button
                  type="submit"
                  className="py-2 w-3/4 font-bold text-white bg-red-500 rounded-full hover:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
              <div className="flex pt-2 justify-center">
                <p className="pr-1 text-gray-600">dont have an account?</p>
                <Link href="/signup">
                  <a className="text-red-500">Sign up</a>
                </Link>
                <p className="pl-1 text-gray-600">now</p>
              </div>
              <div className="flex justify-evenly w-full ">
                <div className="w-1/4 py-6 pl-4">
                  <hr className="bg-gray-900 h-1 " />
                </div>
                <p className="py-2 text-3xl text-red-500">OR</p>
                <div className="w-1/4 py-6 pr-4">
                  <hr className="bg-gray-900 h-1 " />
                </div>
              </div>
              <div className="pt-4 w-full justify-center">
                <GoogleLogin
                  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                  buttonText="Sign up with Google"
                  onSuccess={onSuccess}
                  onFailure={() => {}}
                  className="w-3/4 text-center rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
