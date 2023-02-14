import React from "react";
import { useState } from "react";
import ImageSection from "./components/ImageSection/ImageSection";
import TextContent from "./components/TextContent";

const ModeButton = () => {

    const activeBtn = 'border h-[2.3rem] border-white bg-black text-white w-[50%] border-b-0'
    const Btn =
      "border h-[2.3rem] border-b-white border-[rgb(39,42,58)] bg-[rgb(39,42,58)] text-white w-[50%] hover:border-white hover:bg-black transition-all";
  
    const [mode,setMode] = useState('text')

    const handleModeChange= (mod) => {
       setMode(mod);
    }


  return (
    <div className="h-[4rem] w-full absolute mt-16">
      <div className="flex ">
        <button
          className={`${mode === "text" ? activeBtn : Btn}`}
          onClick={() => handleModeChange("text")}
          type="button"
        >
          TEXT GENERATOR
        </button>
        <button
          className={`${mode === "image" ? activeBtn : Btn}`}
          onClick={() => handleModeChange("image")}
          type="button"
        >
          IMAGE GENERATOR
        </button>
      </div>
      <>{mode === "text" ? <TextContent /> : <ImageSection />}</>
    </div>
  );
};

export default ModeButton;
