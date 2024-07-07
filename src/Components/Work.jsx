export const Work = () => {
  return (
    <div className="flex justify-center">
      <div className="flex block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="flex-col gap-4 p-2">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            I build stuff
          </h1>
          <h1 className="text-3xl mb-4">
            Open source projects, web apps and experimentals.
          </h1>
          <a href="#" className="border-4 p-2 bg-red-300">
            SEE MY WORK
          </a>
        </div>
        <div className="flex-col gap-4 p-2">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            I write, sometimes
          </h1>
          <h1 className="text-3xl mb-4">
            About design, frontend dev, learning and life.
          </h1>
          <a href="#" className="border-4 p-2 bg-red-300">
            READ MY ARTICLES
          </a>
        </div>
      </div>
    </div>
  );
};
