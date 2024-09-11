import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCard/HomeSectionCarosel/HomeSectionCarosel";

const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel />
        <HomeSectionCarosel />
      </div>
    </div>
  );
};

export default HomePage;
