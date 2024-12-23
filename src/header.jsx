// src/Header.jsx
import React, { useState, useEffect } from 'react';

import './App.css'; // Optional for styling
import { auth , db} from './firebase/firebase.jsx'
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { collection, doc, getDocs, query, setDoc, where, getDoc, onSnapshot , updateDoc, increment} from "firebase/firestore";
import { Routes, Route, Link} from 'react-router-dom';

function header() {
    const [name, setName] = useState("");
    useState(() => {
            onAuthStateChanged(auth, (currentUser) => {
            if (currentUser){
                if (currentUser.displayName){
                setName(currentUser.displayName);
                }
                else{
                setName(currentUser.email);
                }
            }
            else setName("");
            });
    }, []);
    
      const signOutOfAccount = async () => {
        signOut(auth).then(() => {
          setName("");
          console.log("Signed out successfully");
        }).catch((error) => {
          // An error happened.
        });
      };
    
      const addViewCount = async () => {
        try {
          const viewDocRef = doc(db, "viewcount", "viewcount"); 
          const viewDoc = await getDoc(viewDocRef);
          if (viewDoc.exists()) {
            await updateDoc(viewDocRef, {
              Views: increment(1),
            });
            console.log("View count incremented!");
          } else {
            console.log("Document does not exist. Creating a new one...");
            await setDoc(viewDocRef, { Views: 1331 }); //my old website on replit
            console.log("Document created and initialized.");
          }
        } catch (error) {
          console.error("Error updating view count:", error.message);
        }
      };
    
      const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
    
          // The signed-in user info.
          const user = result.user;
          setName(user.displayName);
          console.log(user.displayName);
    
          const usersRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(usersRef);
    
          if (!userSnap.exists()) {
            console.log("No such document!");
            //we now want to add a new entry to our database...
            await setDoc(usersRef, {
              email: user.email,
              name: user.displayName,
              uid : user.uid
            })
            
            console.log("Added new entry for user " + user.displayName);
          } else {
            console.log("Document already exists: ", userSnap.data());
          }
        } catch (error) {
          console.error("Error during sign-in:", error.message);
        }
    
      };
    return (
      <header className="site-header">
        <a id="Logoname" href="/">
            <img id="logoimg" src="/maxdraw/images/connectlogo.png" alt="Logo" />
        </a>
        <div className="header-content">

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/People">People</Link></li>
              <li><Link to="/Ipad">Ipad</Link></li>
              <li><Link to="/Other">Other</Link></li>
              <li><Link to="/About">About</Link></li>
              {name ? (
      // If user is logged in, show SIGNOUT button
                <li><button class="dropbtn2" onClick={signOutOfAccount}>SIGNOUT</button></li>
              ) : (
                // If user is not logged in, show LOGIN button
                <li><button class="dropbtn2" onClick={googleSignIn}>LOGIN</button></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
export default header;
