import "./app.pcss";
import App from "./Charts/app.svelte";
import App2 from "./Charts/app2.svelte";
import App3 from "./Charts/secondPassUkrainePie.svelte"
import App4 from "./Charts/secondPassRussiaPie.svelte"

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


export default app;

