import React, { useState } from "react";
import "./imagesection.css";
import "./loadingAnimation.css";

function ImageSection() {
  const [inputValue, setInputValue] = useState("");
  const [size, setSize] = useState("small");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(null);
  const [src, setSrc] = useState("");

  const handleClick = async () => {
    setTimeout(setLoading(true), 6000);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = `${image}`;
    link.href = src;
    link.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let sizeValue = "512x512";
    if (size === "small") {
      sizeValue = "256x256";
    } else if (size === "medium") {
      sizeValue = "512x512";
    } else if (size === "large") {
      sizeValue = "1024x1024";
    }

    const response = await fetch(`http://localhost:5400/image/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `${inputValue}`,
        size: `${sizeValue}`,
      }),
    });
    const data = await response.json();
    console.log(data.image_url);
    setImage(data.image_url);
    setSrc(data.image_url);
    setLoading(false);
  };

  return (
    <div className="image-sec border border-white border-t-0">
      <p className="h1">Generate Your Imagination</p>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          aria-label="default input example"
          type="text"
          placeholder="Your imagination"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="selectInp">
          <div className="input-group mb-3">
            <select
              className="form-select"
              id="inputGroupSelect02"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <label className="input-group-text" for="inputGroupSelect02">
              Size
            </label>
          </div>
        </div>
        <button
          className="btn btn-outline-light"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>

      {loading ? (
        <div className="spin d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="image-container">
          <div className="img">
            <img src={`${image}`} alt={inputValue} />
          </div>
          {image ? (
            <div className="download-btn">
              <button
                className="btn btn-outline-light"
                onClick={handleDownload}
                type="download"
                disabled={!src}
              >
                Download this image
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ImageSection;
