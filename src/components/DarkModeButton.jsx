import { MoonIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

function DarkModeButton(props) {


  const changeTheme = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      localStorage.setItem("color-theme", "light");
      document.documentElement.classList.add("dark");
    }
  };



  return (
    <button onClick={changeTheme} className="mr-3 flex justify-center items-center rounded-md aspect-square px-3 dark:bg-slate-900 bg-slate-200">
      <MoonIcon className="w-6 h-6 text-slate-600 dark:text-orange-300"></MoonIcon>
    </button>
  );
}

export default DarkModeButton;
