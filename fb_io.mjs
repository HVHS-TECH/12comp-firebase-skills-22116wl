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
console.log('%c fb_io.mjs', 'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules


/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/

import { initializeApp }        from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }          from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { set, get, ref, update, query, orderByChild, limitToFirst, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    
// fb_initialise()
// Called by html INITIALISE button
// initialise
// Input:  n/a
// Return: n/a

var fb_db;

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

    fb_db = getDatabase(initializeApp(FB_GAMECONFIG));
    console.info(fb_db);
}


function fb_authenticate() {
    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();
    
    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log('success');
        console.log(result);
    })
    
    .catch((error) => {
        console.log('error!');
        console.log(error);
    });
}

function fb_authChanged() {
    const AUTH = getAuth();

    onAuthStateChanged(AUTH, (user) => {
        if (user) {
            console.log(user + ' logged in');
        } else {
            console.log('log out');
        }
    }, (error) => {
        console.log('error!');
        console.log(error);
    });
}

function fb_logout() {
    const AUTH = getAuth();

    signOut(AUTH).then(() => {
        console.log('successful logout');
    })

    .catch((error) => {
        print('error in loging out');
        print(error);
    });
}

function fb_write(path, data) {
    const REF = ref(fb_db, path);
    console.info(fb_db);

    console.log(REF);

    set(REF, data).then(() => {
        console.log('written successfully!');
    }).catch((error) => {
        console.log('error');
        console.log(error);
    });
}

function fb_delete(data) {
    const CONFIG = {
        apiKey: "AIzaSyBNDhyKyF4h86o_xE3AY_e51-vB6gAUX1g",
        authDomain: "comp-2025-joshua-k-h.firebaseapp.com",
        databaseURL: "https://comp-2025-joshua-k-h-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-joshua-k-h",
        storageBucket: "comp-2025-joshua-k-h.firebasestorage.app",
        messagingSenderId: "695585659485",
        appId: "1:695585659485:web:a965ad296454cd022f0bb4",
        measurementId: "G-BZX0JJYC05"
    };

    var db = getDatabase(initializeApp(CONFIG));
    
    set(ref(db, "/"), data).then(() => {
        console.log('written successfully!');
    }).catch((error) => {
        console.log('error');
        console.log(error);
    });
}

function fb_read(path) {
    const REF = ref(fb_db, path);

    get(REF).then((snapshot) => {
        var fb_data = snapshot.val();

        if (fb_data != null) {
            console.log(fb_data);
            return fb_data;
        } else {
            console.log('no data found');
        }

    }).catch((error) => {
        console.log('error in reading database');
        console.log(error);
    });
}

function fb_update(path, data) {
    const REF = ref(fb_db, path);

    update(REF, data).then(() => {
        console.log('updated successfully');
    }).catch((error) => {
        console.log('error');
        console.log(error);
    });
}

function getLength(tableToCheck) {
    var count = 0;

    tableToCheck.forEach(function() { count += 1; });

    return i;
}

function fb_readSorted(path, sortkey, number) {
    const dbReference= query(ref(fb_db, path), orderByChild(sortkey) ); //, limitToFirst(number));

    get(dbReference).then((snapshot) => {

        var sortedTable = {};
        var numToTop = 6;

        const LENGTH = getLength(snapshot.val());

        console.log(snapshot.val());
            
        for (var i = 0; i < numToTop; i++) {
            console.log(i);
            console.log(snapshot.val());
            console.log(LENGTH);
            console.log(snapshot.val()[LENGTH - i - 1]);


            sortedTable[i] = snapshot.val()[snapshot.val().length - i - 1];

        }

        console.log(sortedTable);

    if (fb_data != null) {
            console.log('successful read');
            console.log(fb_data);
        } else {
           console.log('no data found');
        }
    }).catch((error) => {
        console.log('error!');
        console.log(error);
    });
}

export { fb_initialise, fb_authenticate, fb_authChanged, fb_logout, fb_write, fb_read, fb_update, fb_readSorted, fb_delete };

/*************************************************************/
// END OF CODE
/**************************************************************/