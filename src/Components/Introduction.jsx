import { IntroductionImage } from "./IntroductionImage";

export const Introduction = () => {
  return (
    <div className="flex justify-around p-2">
      <div>
        <div className="flex ">
          <div className="flex-col text-center justify-center content-center gap-2">
            <h1 className="text-3xl">
              Hi,myself{" "}
              <span>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Sushmita Kumari
                </h1>
              </span>
            </h1>

            <p className="mb-6 text-lg font-normal text-gray-500">
              {" "}
              Frontend Devloper
            </p>
          </div>
        </div>
      </div>
      <IntroductionImage />
    </div>
  );
};
