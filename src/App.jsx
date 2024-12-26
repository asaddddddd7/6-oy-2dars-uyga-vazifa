import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HellWoorld from "./components/1-mashq";
import Animal from "./components/2-mashq";
import ColorList from "./components/3-mashq";
import WeekDays from "./components/4-mashq";
import GreetingCard from "./components/5-mashq";
import FamousCities from "./components/6-mashq";
import SeasonColors from "./components/7-mashq";

function App() {
  return (
    <div>
      <HellWoorld
        laguage1="Hello, World!"
        laguage2="Salom, Dunyo!"
        laguage3="Привет, Мир!"
        laguage4="こんにちは、世界"
      />
      <Animal
        it="It 🐶"
        mushuk="Mushuk 🐱"
        fil="Fil 🐘"
        sher="Sher 🦁"
        qush="Qush 🐦"
      />
      <ColorList
        red="red"
        yashil="yashil"
        blu="kok"
        sariq="sariq"
        qizil="qizil"
      />
      <WeekDays
        dushanba="Dushanba"
        seshanba="Seshanba"
        chorshanba="Chorshanba"
        payshanba="Payshanba"
        juma="Juma"
        shanba="Shanba"
        yakshanba="Yakshanba"
      />
      <GreetingCard />
      <FamousCities />
      <SeasonColors />
    </div>
  );
}

export default App;
