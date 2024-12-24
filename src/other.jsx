import { useEffect, useRef, React } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import { preloadImages } from './utils';

const Other = () => {
  useEffect(() => {
    // Preload images specific to the Home component
    const imagesToPreload = [
      "images/connectlogo.png",
      "images/Croppedbackground1.png",
      "images/open.png",
      "images/close.png",
      "images/other6.jpg",
      "images/other2.jpg",
      "images/other3.jpg",
      "images/other1.jpg"
    ];

    preloadImages(imagesToPreload).then(() => {
      console.log("Images for Other preloaded!");
    }).catch((error) => {
      console.error("Error preloading images for Other:", error);
    });
  }, []);
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="other-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="person" variants={itemVariants}>
        <span className="info">
          <h1>Islamic Art</h1>
          <br />
          <div className="line-2"></div>
          <br />
          Mr. Einfeldt plz I need the one point of extra credit
        </span>
        <div className="image-container2">
          <span id="maximg">
            <img className="clickable" id="maxpicture" src="images/other6.jpg" alt="Islamic Art" />
          </span>
          <div className="bottom-right-text">9/23/2024</div>
        </div>
      </motion.div>

      <motion.div className="person" variants={itemVariants}>
        <div className="image-container2">
          <span id="maximg">
            <img className="clickable" id="maxpicture" src="images/other1.jpg" alt="Guy Eating Earth" />
          </span>
          <div className="bottom-right-text">2022?</div>
        </div>
        <span className="info">
          <h1>
            A guy eating a <br />
            guy eating Earth
          </h1>
          <br />
          <div className="line-2"></div>
          <br />
          I drew this with my friends at school with marker.
        </span>
      </motion.div>

      <motion.div className="person" variants={itemVariants}>
        <span className="info">
          <h1>Max's pizza</h1>
          <br />
          <div className="line-2"></div>
          <br />
          A visual arts elective I had for a few months in 7th grade
        </span>
        <div className="image-container2">
          <span id="maximg">
            <img className="clickable" id="maxpicture" src="images/other2.jpg" alt="Max's Pizza" />
          </span>
          <div className="bottom-right-text">2021</div>
        </div>
      </motion.div>

      <motion.div className="person" variants={itemVariants}>
        <div className="image-container2">
          <span id="maximg">
            <img className="clickable" id="maxpicture" src="images/other3.jpg" alt="I'm Dizzy" />
          </span>
          <div className="bottom-right-text">I don't know</div>
        </div>
        <span className="info">
          <h1>im dizzy</h1>
          <br />
          <div className="line-2"></div>
          idk when I drew this to be honest.
          <br />
        </span>
      </motion.div>

      <motion.div className="person" variants={itemVariants}>
        <span className="info">
          <h1>depressed lisa</h1>
          <br />
          <div className="line-2"></div>
          7th grade visual arts elective.
          <br />
          Mona Lisa sad because of pollution.
          <br />
        </span>
        <div className="image-container2">
          <span id="maximg">
            <img className="clickable" id="maxpicture" src="images/other4.jpg" alt="Depressed Lisa" />
          </span>
          <div className="bottom-right-text">2021</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Other;
