import "./app.pcss";
import App from "./Charts/App.svelte";
import App2 from "./Charts/App2.svelte";


const app = new App({
  target: document.getElementById("app"),
});

const app2 = new App2({
  target: document.getElementById("app2"),
});


export default app;

