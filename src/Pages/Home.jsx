import React from "react";
import NavBar from "../Components/NavBar";
import CarouselSlide from "../Components/CarouselSlide";
import BannerAcademico from "../Components/BannerAcademico";
import BannerCGN from "../Components/BannerCGN";

function Home() {

  return (
    <div>
      <NavBar/>
      <div className=" mx-auto">
        <img className="h-[44rem] w-full bg-cover" src="https://www.elheraldo.co/sites/default/files/articulo/2022/09/21/judi_porto_azul.jpg" alt="CGN" />
      </div>
      <BannerAcademico/>
      <BannerCGN/>
    </div>
  );
}

export default Home;
