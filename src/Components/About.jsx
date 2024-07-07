export const About = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 m-8 p-5">
      <div>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          About Me
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 text-justify">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="flex justify-center gap-5 p-5">
        <div className="flex-col flex-wrap w-2/6">
          <h1 className="text-3xl font-medium">Get to know me!</h1>
          <p className="mb-6 text-lg font-normal text-justify ">
            I'm a Frontend Focused Web Developer building and managing the
            Front-end of Websites and Web Applications that leads to the success
            of the overall product. Check out some of my work in the Projects
            section.
          </p>
          <p className="mb-6 text-lg font-normal text-justify">
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>
        <div className="flex-col ">
          <h1 className="text-3xl font-medium">Skills</h1>
          <div className="flex gap-3">
            <div className="border-4 bg-slate-100 text-slate-500 p-2">HTML</div>
            <div className="border-4 bg-slate-100 text-slate-500 p-2">CSS</div>
            <div className="border-4 bg-slate-100 text-slate-500 p-2">
              JAVASCRIPT
            </div>
            <div className="border-4 bg-slate-100 text-slate-500 p-2">
              REACT
            </div>
            <div className="border-4 bg-slate-100 text-slate-500 p-2">GIT</div>
            <div className="border-4 bg-slate-100 text-slate-500 p-2">
              GITHUB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
