import React from "react";
import Title from "components/shared/Title";
import { BOOSTER_DATA } from "data/booster-data";

const Boosters = () => {
  return (
    <div className="h-full px-8 xl:px-16 lg:my-8">
      <Title content="Booster Packs" />
      <div className="flex flex-col-reverse lg:flex-row items-center mt-2 lg:mt-16 ">
        <div className="left-content lg:pr-24 relative">
          <div className=" relative ">
            <div className="absolute h-3/4 w-5/6 bottom-0 left-0 bg-secondary-500" />
            <img
              src="/images/booster-2.jpg"
              className="hidden lg:block object-center object-cover relative -top-4 left-4"
            />
          </div>
        </div>
        <div className="right-content lg:items-center">
          <div className="grid grid-cols-3 gap-8  lg:gap-16 w-full lg:w-auto">
            {BOOSTER_DATA.map((item, index) => (
              <React.Fragment key={index.toString()}>
                <BoosterItem price={item.price} leads={item.leads} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BoosterItem = ({ price, leads }) => {
  return (
    <div className="relative flex flex-col items-center justify-center transform scale-100 hover:scale-105 transition-all ease-out duration-100">
      <div className="text-md xs:text-lg sm:text-lg landscape:text-md lg:text-3xl font-semibold ">
        {price}
      </div>
      <div className="text-xs xs:text-sm sm:text-sm landscape:text-xs lg:text-base font-normal mt-2">{`${leads} Leads`}</div>
      <div className="h-0 w-full border border-solid border-secondary-500"></div>
    </div>
  );
};
export default Boosters;
