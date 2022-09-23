import { camera, scene } from './app.js';

let ff = scene;

window.addEventListener("click", () => {
    scene.getObjectByName("cube2").name = "sina";
    console.log(scene.getObjectByName("cube2"));
})



