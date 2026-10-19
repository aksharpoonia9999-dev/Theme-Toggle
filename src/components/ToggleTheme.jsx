import { useState } from "react";
import Icons from "./common/Icons";

const ToggleTheme = () => {
  const [Dark, setDark] = useState(false);

  const toggleTheme = () => {
    const body = document.body;
    body.classList.add("transition-all", "duration-300", "ease-in-out");

    if (body.getAttribute("theme") === "dark") {
      body.setAttribute("theme", "light");
      setDark(false);
      body.classList.add("bg-white");
      body.classList.remove("bg-black");
    } else {
      body.setAttribute("theme", "dark");
      setDark(true);
      body.classList.add("bg-black");
      body.classList.remove("bg-white");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center w-20 h-8.75 rounded-full cursor-pointer transition-all ease-in-out duration-300 p-2 ${
        Dark ? "bg-gray-800 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <span className="flex items-center justify-center w-6 h-6">
        {Dark ? <Icons icon="dark" /> : <Icons icon="light" />}
      </span>
    </button>
  );
};

export default ToggleTheme;
