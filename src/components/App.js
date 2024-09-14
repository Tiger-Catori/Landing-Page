import { useState } from "react";

import React from 'react';
import Navbar from './Navbar';
import Hero from "./Hero";
import About from "./About";
import Benefits from './Benefits';
import Features from "./Features";
import Life from "./Life";
import AppIcon from "./AppIcon"; 
import AppStore from "./AppStore";
import FormSection from "./FormSection";
import Footer from './Footer';


export default function App() {
  return (
    <body>
      <Navbar />
      {/* <Hero /> */}
      <div className="container__body">
        {/* <Navbar /> This means the width is not 100% of viewport */}
        <Hero />
        <About />
        <Benefits />
        <Features />
        <Life />
        <AppIcon/>
        <AppStore/>
        <FormSection />
        <Footer />
        {/* Other components or content */}
      </div>
    </body>
  );
}
