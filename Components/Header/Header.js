import { useState, useEffect } from "react";
import Logo from "../../public/Icon/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
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
    <header className="pb-40">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        <Image
          width={60}
          height={60}
          alt="logo"
          src={Logo}
          className="rounded-xl"
        />
        <div className="flex">
          <a className="p-4">Sign in</a>
          <a className="p-4">Sign up</a>
          <div className="p-4">{renderThemeChanger()}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
