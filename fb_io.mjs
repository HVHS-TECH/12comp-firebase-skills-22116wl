//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Wilfred Leicester, Term 2 2025
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
            'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_initialise };
export { fb_authenticate };

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {  getDatabase  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    
// fb_initialise()
// Called by html INITIALISE button
// initialise
// Input:  n/a
// Return: n/a
function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';');

    const FB_GAMECONFIG = {
        apiKey: "AIzaSyCwPcoDMGchHrJSuN_CWiQciiIJcnhYJVE",
        authDomain: "comp-2025-wilfred-leices-a7207.firebaseapp.com",
        databaseURL: "https://comp-2025-wilfred-leices-a7207-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-wilfred-leices-a7207",
        storageBucket: "comp-2025-wilfred-leices-a7207.firebasestorage.app",
        messagingSenderId: "155933616174",
        appId: "1:155933616174:web:78589529167648f04f97bf"
    };

    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    var FB_GAMEDB  = getDatabase(FB_GAMEAPP);
    console.info(FB_GAMEDB);
}



import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

function fb_authenticate() {
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();

    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log('success!');
        console.log(result);
    })

    .catch((error) => {
        console.log('error!');
        console.log(error);
    });
}

/**************************************************************/
// END OF CODE
/**************************************************************/