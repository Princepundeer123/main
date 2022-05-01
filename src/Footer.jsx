import React from "react";

function Footer() {
  return (
<footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.codeyogi.io" class="hover:underline text-blue-500 font-bold">CodeYogi</a>.I LOVE CODEYODI.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 font-bold">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 font-bold">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 font-bold">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline font-bold">Contact</a>
        </li>
    </ul>
</footer>
    
  );
  
}

export default Footer;