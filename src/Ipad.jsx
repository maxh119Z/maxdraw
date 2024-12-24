import { useEffect, useRef, React } from 'react';
import './App.css';
import Header from './header.jsx';
import { preloadImages } from './utils';
import { motion } from "framer-motion";

const Ipad = () => {
  useEffect(() => {
    // Preload images specific to the Home component
    const imagesToPreload = [
      "images/connectlogo.png",
      "images/Croppedbackground1.png",
      "images/open.png",
      "images/close.png",
      "images/ipad1.jpg",
      "images/ipad2.png",
      "images/person9.png"
    ];

    preloadImages(imagesToPreload).then(() => {
      console.log("Images for Ipad preloaded!");
    }).catch((error) => {
      console.error("Error preloading images for Ipad:", error);
    });
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="person">
  <span className="info">
    <h1>last week before amc10 AHhh</h1>
    <br />
    <div className="line-2"></div>
    <br />
    help i failed
  </span>
  <div className="image-container2">
    <span id="maximg">
      <img className="clickable" id="maxpicture" src="images/person9.png" alt="Max" />
    </span>
    <div className="bottom-right-text">11/3/2024</div>
  </div>
</div>

<div className="person">
  <div className="image-container2">
    <span id="maximg">
      <img className="clickable" id="maxpicture" src="images/ipad1.jpg" alt="Max" />
    </span>
    <div className="bottom-right-text">December 2023</div>
  </div>
  <span className="info">
    <h1>boy and heron</h1>
    <br />
    <div className="line-2"></div>
    I drew this with my brother while on plane ride to Cancun in Winter Break
  </span>
</div>

<div className="person">
  <span className="info">
    <h1>boy x heron<br /> computer wallpaper</h1>
    <br />
    <div className="line-2"></div>
    I drew this after watching
    <br />
    boy and heron with my brother.
    <br />
  </span>
  <div className="image-container2">
    <span id="maximg">
      <img className="clickable" id="maxpicture" src="images/ipad2.png" alt="Max" />
    </span>
    <div className="bottom-right-text">2023 December</div>
  </div>
  <div className="person">
    <div className="image-container2">
      <span id="maximg">
        <img className="clickable" id="maxpicture" src="images/ipad3.jpg" alt="Max" />
      </span>
      <div className="bottom-right-text">April 2024</div>
    </div>
    <span className="info">
      <h1>he is more chinese<br /> than Kevin Zhou</h1>
      <br />
      <div className="line-2"></div>
      I drew this on plane ride on Ana's iPad
    </span>
  </div>
</div>

      {/* Add remaining content here */}
    </motion.div>
  );
};

export default Ipad;