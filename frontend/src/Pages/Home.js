import React from "react";
import About from "../Sections/About";
import Faq from "../Sections/Faq";
import Hero from "../Sections/Hero";
import HowOrganizeEvents from "../Sections/HowOrganizeEvents";
import Partners from "../Sections/Partners";
import PopularEvents from "../Sections/PopularEvents";
import Testimonials from "../Sections/Testimonials";
import UpcomingEvents from "../Sections/UpcomingEvents";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularEvents />
      <About />
      <UpcomingEvents />
      <Testimonials />
      <HowOrganizeEvents />
      <Faq />
      <Partners />
    </>
  );
};

export default Home;
