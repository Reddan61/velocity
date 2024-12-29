import { ServiceSection } from "@/Components/ServiceSection/ServiceSection";
import { TabSection } from "@/Components/TabSection/TabSection";
import { ThisSection } from "@/Components/ThisSection/ThisSection";
import { WhatSection } from "@/Components/WhatSection/WhatSection";

export const Home = () => {
  return (
    <>
      <ThisSection />
      <WhatSection />
      <ServiceSection />
      <TabSection />
    </>
  );
};
