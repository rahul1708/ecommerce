import React from "react";
import MainCarosel from "../../HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../components/HomeSectionCard/HomeSectionCarosel";
import { mens_kurta } from "../../../Data/mens_kurta";
const HomePage = () => {
  return (
    <div>
      <MainCarosel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"} />
      </div>
    </div>
  );
};

export default HomePage;
