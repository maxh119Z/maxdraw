import { useEffect, useRef } from 'react';
import './App.css';
import { auth, db } from './firebase/firebase.jsx';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from 'firebase/firestore';
import Header from './header.jsx';
import People from './People.jsx';
import Ipad from './Ipad.jsx';
import Other from './other.jsx';
import About from './About.jsx';
import { isMobile } from 'react-device-detect';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const containerRef = useRef(null); // Used for floating elements animation

  const mobileshit = () => {
    console.log('Running mobileshit logic...');
    if (isMobile || window.self !== window.top) {
      alert('Mobile Detected');
      document.body.style.opacity = 1;

      // Style adjustments for different elements
      const adjustFontSizes = (selector, fontSize) => {
        document.querySelectorAll(selector)?.forEach(el => {
          el.style.fontSize = fontSize;
        });
      };

      adjustFontSizes('.info', '0.7rem');
      adjustFontSizes('.info2', '0.7rem');
      adjustFontSizes('.bottom-right-text', '0.85rem');

      // Title adjustments
      const titleEl = document.getElementById('TITLE');
      if (titleEl) {
        titleEl.style.fontSize = '1.5rem';
        titleEl.style.fontWeight = 'bold';
      }

      const descriptionEl = document.getElementById('titledescription');
      if (descriptionEl) {
        descriptionEl.style.fontSize = '1rem';
      }

      // Orientation-specific adjustments
      const text1El = document.getElementById('text1');
      if (text1El && window.matchMedia('(orientation: portrait)').matches) {
        text1El.innerHTML =
          'This website shows drawings I drew for fun. I like drawing, and am mostly self-taught. I hope you enjoy! :P';
      }
    }

    if (document.title === 'Overview') {
      console.log('Overview-specific logic triggered.');
      // Create GIF animation
      const gifDiv = document.createElement('div');
      gifDiv.className = 'gif';
      const gifImg = document.createElement('img');
      gifImg.src = `images/back2.gif?t=${new Date().getTime()}`;
      gifImg.className = 'gifimg';
      gifDiv.appendChild(gifImg);
      document.body.appendChild(gifDiv);

      // Add fade-out effect
      setTimeout(() => {
        gifImg.classList.add('fade-out');
        setTimeout(() => {
          gifImg.remove();
          gifDiv.remove();
        }, 500);
      }, 2900);

      // Add floating elements
      const numberOfSquares = 34;
      setTimeout(() => {
        const container = containerRef.current;
        if (container) container.classList.add('shake');

        for (let i = 0; i < numberOfSquares; i++) {
          setTimeout(() => {
            const square = document.createElement('div');
            square.classList.add(
              Math.random() > 0.83 ? 'floating-rectangle' : 'floating-square'
            );
            square.style.left = `${Math.random() * window.innerWidth}px`;
            if (container) container.appendChild(square);

            setTimeout(() => {
              if (container) container.removeChild(square);
            }, 4000);
          }, Math.random() * 1350);
        }
      }, 1750);
    }
  };

  const addViewCount = async () => {
    try {
      const viewDocRef = doc(db, 'viewcount', 'viewcount');
      const viewDoc = await getDoc(viewDocRef);
      if (viewDoc.exists()) {
        await updateDoc(viewDocRef, {
          Views: increment(1),
        });
        console.log('View count incremented!');
      } else {
        console.log('Document does not exist. Creating a new one...');
        await setDoc(viewDocRef, { Views: 1331 }); // Initial value
        console.log('Document created and initialized.');
      }
    } catch (error) {
      console.error('Error updating view count:', error.message);
    }
  };

  useEffect(() => {
    addViewCount();
    mobileshit();
  }, []);

  return (
    <Router>
      <Header />
      <div ref={containerRef}>
        <AnimatedRoutes />
      </div>
      <footer>
        <p>
          Make your own website
          <br />
          <a href="https://youtu.be/chOvyuyZe9M">https://youtu.be/chOvyuyZe9M</a>
        </p>
        <p>
          Do not email me
          <br />
          <a href="mailto:maxhzhang119@gmail.com">maxhzhang119@gmail.com</a>
        </p>
      </footer>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/People" element={<People />} />
        <Route path="/Ipad" element={<Ipad />} />
        <Route path="/Other" element={<Other />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div id="TITLE">
        <h1>Max's Drawings</h1>
      </div>
      <div className="line-1"></div>
      <div id="titledescription">
        <h2>Website made in 2024 Summer</h2>
      </div>
      <div id="overview">
        <a href="/People">
          <div className="image-container">
            <img src="images/person10.jpg" alt="Overview Image" id="overviewpicture" />
            <div className="bottom-right-text">Recent</div>
          </div>
        </a>
        <div id="overview-text">
          <p id="text1">
            On Max's Drawings, you will see drawings I do over time. I like drawing sometimes, so I
            made this website. Below this description, you can see portraits or ppl I draw, other
            stuff, and things I drew on my brother's Ipad during break. I hope you enjoy! I also put
            some drawings from a few years ago I found in my closet. I originally created this
            website for a non-profit idea but screw that becuz it seems like too much work that I
            didn't want to do.
          </p>
        </div>
      </div>
      <div className="line-1"></div>
      <div className="person" id="bar">
        <a href="/People">
          <div className="image-container">
            <img src="images/person1.jpg" alt="personlookingsideways" className="indexpics" />
            <div className="bottom-right-text">People</div>
          </div>
        </a>
        <a href="/Ipad">
          <div className="image-container">
            <img src="images/ipad1.jpg" alt="boyheronwallpaperIdrew" className="indexpics" />
            <div className="bottom-right-text">Ipad Draws</div>
          </div>
        </a>
        <a href="/Other">
          <div className="image-container">
            <img src="images/other1.jpg" alt="abstractpicture" className="indexpics" />
            <div className="bottom-right-text">Other Stuff</div>
          </div>
        </a>
        <a href="/About">
          <div className="image-container">
            <img src="images/maxpicture.jpg" alt="maxpicture" className="indexpics" />
            <div className="bottom-right-text">About me ig</div>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default App;
