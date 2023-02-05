import React from 'react'
import "semantic-ui-css/semantic.min.css";
import TextSection from "./textSection/Textsection";
import ImageSection from './imageSection/Imagesection';

const ModeButton = () => {
  return (
    <div className="Mode">
      <div className="d-flex gap-0 col-12 mode-button-container fixed-top">
        <button className="button " type="button">
          Rubick's Text
        </button>
        <button className="button " type="button">
          Rubick's Image
        </button>
      </div>
      <TextSection />
      {/* <ImageSection /> */}
    </div>
  );
}

export default ModeButton
