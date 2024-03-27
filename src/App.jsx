import React from "react";
import Navbar from "./comps/Navbar";
import Hero from "./comps/Hero";
import Parallax from "./comps/Parallax";
import About from "./comps/About";
import Featured from "./comps/Featured";
import Contact from "./comps/Contact";
const App = () => {
  return (
    <div>
      <div className="h-screen w-screen snap-start bg-gradient-to-b from-[#0d0d21] to-[#111130] gap-y-4 " id="homepage">
        <Navbar />
        <Hero />
      </div>
      <Parallax />
      <About />
      <Parallax type={"works"} />
      <Featured />
      <Contact />
    </div>
  );
};

export default App;
