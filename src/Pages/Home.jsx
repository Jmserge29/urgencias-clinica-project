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
        <img className="h-[44rem] w-full bg-cover" src="https://www.clinicageneraldelnorte.com/wp-content/uploads/2018/05/banner-resena-historica2.jpg" alt="CGN" />
      </div>
      <BannerAcademico/>
      <BannerCGN/>
    </div>
  );
}

export default Home;
