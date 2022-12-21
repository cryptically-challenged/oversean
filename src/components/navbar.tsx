const Navbar = () => {
  return (
    <header>
      <section
        className="body-font tails-selected-element relative w-full bg-white px-8 text-gray-700"
        data-tails-scripts="//unpkg.com/alpinejs"
      >
        <div className="container mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-between py-5 md:flex-row">
          <a
            href="#_"
            className="relative z-10 flex w-auto select-none items-center text-2xl font-extrabold leading-none text-black"
          >
            oversees.
          </a>
          <nav className="top-0 left-0 z-0 -ml-0 flex h-full w-full items-center justify-center space-x-5 py-5 text-base md:absolute md:-ml-5 md:py-0">
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Home</span>
              <span className="absolute bottom-0 left-0 -mb-1 inline-block h-0.5 w-full overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block h-1 w-full transform bg-gray-900"
                  style={{ display: "none" }}
                ></span>
              </span>
            </a>
            <a
              href="#_"
              className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              x-data="{ hover: false }"
            >
              <span className="block">Features</span>
              <span className="absolute bottom-0 left-0 -mb-1 inline-block h-0.5 w-full overflow-hidden">
                <span
                  x-show="hover"
                  className="absolute inset-0 inline-block h-1 w-full transform bg-gray-900"
                  style={{ display: "none" }}
                ></span>
              </span>
            </a>
          </nav>

          <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <button type="submit" className="btn-submit shadow-solid-curve">
              Connect
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
