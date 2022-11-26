import Link from "next/link";

export const Nav = () => {
  return (
    <div>
      <nav className="bg-white shadow  dark:bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <Link className="flex-shrink-0" href="/">
                <img
                  className="h-8 w-8"
                  src="/icons/rocket.svg"
                  alt="Workflow"
                />
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    href="/#"
                  >
                    Home
                  </Link>
                  <Link
                    className="rounded-md px-3  py-2 text-sm font-medium text-gray-800 hover:text-gray-800 dark:text-white dark:hover:text-white"
                    href="/#"
                  >
                    Gallery
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    href="/#"
                  >
                    Content
                  </Link>
                  <Link
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    href="/#"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:text-gray-300 focus:outline-none dark:text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              href="/#"
            >
              Home
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-800 dark:text-white"
              href="/#"
            >
              Gallery
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              href="/#"
            >
              Content
            </Link>
            <Link
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:text-gray-800 dark:hover:text-white"
              href="/#"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
