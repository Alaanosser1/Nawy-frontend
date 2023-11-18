function NavBar() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-100 dark:border-gray-100 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-8" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Sell
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Nawy Now
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-1 text-gray-500 rounded md:bg-transparent "
                  aria-current="page"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
