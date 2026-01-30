// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16">
      <div className="order-2 lg:order-1">
        <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
          Who I am?
        </p>
        <p className="text-gray-200 text-sm lg:text-lg">
          {personalData.description}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;