import React from "react";
import Typewriter from "../../components/typeRighter/Typewriter"
import İntroduceSec from "../../components/introduceSec/İntroduceSec"
import ConnectSec from "../../components/connectSec/ConnectSec";

function home() {
  return (
    <>
    <section className="max-w-[1320px] w-[80%] mx-auto mt-46">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="left-side">
          <h1 className="heading pb-[15px] text-[#f5f5f5] text-[38px]">
            Hi There!{" "}
            <span className="wave" role="img" aria-label="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name text-[40px] text-[#f5f5f5]">
            I'M<strong className="main-name text-[#cd5ff8]"> JUMSHUD ISMAILOV</strong>
          </h1>
          <Typewriter/>
        </div>
        <div className="rightSide flex justify-end">
            <img className="w-[450px] h-[450px]" src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="homeSecImg" />
        </div>
      </div>
    </section>
    <İntroduceSec/>
    <ConnectSec/>
    </>
  );
}

export default home;
