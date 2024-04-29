import "././app.pcss";
import App from "././app.svelte";
import App2 from "././app2.svelte";
import App3 from "././secondPassUkrainePie.svelte"
import App4 from "././secondPassRussiaPie.svelte"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = new App({
  target: document.getElementById("app"),
});

const app2 = new App2({
  target: document.getElementById("app"),
});

const app3 = new App3({
  target: document.getElementById("app"),
});

const app4 = new App4({
  target: document.getElementById("app"),
});


const firebaseConfig = {
  apiKey: "AIzaSyDN99C589zcw7bpLII2c5A65vPv3ob4MY0",
  authDomain: "dashboard-e53f9.firebaseapp.com",
  projectId: "dashboard-e53f9",
  storageBucket: "dashboard-e53f9.appspot.com",
  messagingSenderId: "158544210081",
  appId: "1:158544210081:web:b0581c6a06aa96da3a28e0",
  measurementId: "G-81TDN9HPFQ"
};

// Initialize Firebase
const app_fb = initializeApp(firebaseConfig);
const analytics = getAnalytics(app_fb);


export default app;