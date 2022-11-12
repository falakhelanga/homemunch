import React from "react";
import EntryForm from "./EntryForm";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import HowItWorksForTheChefs from "./HowItWorksForTheChefs";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <HowItWorksForTheChefs />
      <EntryForm />
    </div>
  );
};

export default LandingPage;
