import Image from "next/image";

const Hero = () => {
  return (
    <section className="tails-selected-element w-full bg-white md:pb-24">
      <div className="border-gray-300 mx-auto mt-2 box-border flex max-w-7xl flex-col content-center items-center border-0 border-solid px-8 leading-6 text-black md:mt-20 md:flex-row lg:px-16 xl:mt-0">
        <div className="box-border w-full border-solid text-black md:w-1/2 md:pl-6 xl:pl-32">
          <h2 className="border-gray-300 m-0 border-0 text-xl font-semibold leading-tight md:text-2xl lg:text-3xl">
            Automated Tasks
          </h2>
          <p className="border-gray-300 m-0 border-0 pt-4 pb-8 leading-7 text-gray-700 sm:pr-10 lg:text-lg">
            Keep track of all your aspirations
          </p>
          <ul className="border-gray-300 m-0 border-0 p-0 leading-6">
            <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
              <span
                className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-overseanYellow text-white"
                data-primary="yellow-400"
              >
                <span className="text-sm font-bold">✓</span>
              </span>
              Keep track of all your aspirations
            </li>
            <li className="relative box-border border-solid py-1 pl-0 text-left text-gray-500">
              <span
                className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-overseanYellow text-white"
                data-primary="yellow-400"
              >
                <span className="text-sm font-bold">✓</span>
              </span>
              Find your dream universities abroad!
            </li>
          </ul>
        </div>

        <div className="relative mt-10 mb-4 box-border w-full max-w-md border-solid bg-contain bg-no-repeat px-4 text-center md:mt-0 md:w-1/2 md:max-w-none lg:mb-0">
          <Image
            alt="sike"
            src="/hero.png"
            className="position-glitch shadow-solid-curve pl-4  xl:pl-10"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
