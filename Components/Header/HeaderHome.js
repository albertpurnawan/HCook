import { useState, useEffect } from "react";
import Logo from "../../public/Icon/logo.png";
import profile from "../../public/Images/billgates.jpg";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, CogIcon } from "@heroicons/react/solid";
import SearchBar from "../Search/SearchBar";
const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <header className="pb-10">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        <div className="p-4">
          <Image
            width={60}
            height={60}
            alt="logo"
            src={Logo}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-row text-2xl">
          <Link href="/">
            <a className="px-4 hover:text-blue-400">Home</a>
          </Link>
          <Link href="/">
            <a className="px-4 hover:text-blue-400">Categories</a>
          </Link>
          <Link href="/">
            <a className="px-4 hover:text-blue-400">Ingredients</a>
          </Link>
        </div>
        <div className="flex">
          <div className="px-4">
            <SearchBar placeholder="Search for the recipe?" />
          </div>
          <div className="px-2">
            <CogIcon className="w-7 h-7 mt-1" role="button" />
          </div>
          <div className="-mt-2 ml-4">
            <Link href="/profile" passHref>
              <Image
                width={50}
                height={50}
                alt="profile"
                src={profile}
                className="rounded-full"
              />
            </Link>
          </div>
          <div className="p-2 hidden">{renderThemeChanger()}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
