/////  harekat camera  /////

let harekat_ch = document.getElementById("harekat_ch");
let harekat_ch2 = document.getElementById("harekat_ch2");

let h_w = innerWidth / 5;
let h_h = h_w;
let x = (h_w / 2) + (innerWidth / 40);
let y = (innerHeight - h_h) + (h_h / 2) - (innerWidth / 40);

harekat_ch.style.width = h_w + "px";
harekat_ch.style.height = h_h + "px";
harekat_ch.style.top = innerHeight - h_h - innerWidth / 40 + "px";
harekat_ch.style.left = innerWidth / 40 + "px";

harekat_ch2.style.width = h_w / 1.5 + "px";
harekat_ch2.style.height = h_h / 1.5 + "px";
harekat_ch2.style.left = x - ((h_w / 1.5) / 2) + "px";
harekat_ch2.style.top = y - ((h_h / 1.5) / 2) + "px";
harekat_ch2.addEventListener("touchstart", (e) => {


    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;


})

harekat_ch2.addEventListener("touchmove", (e) => {


    x = e.changedTouches[0].pageX;
    y = e.changedTouches[0].pageY;


})
harekat_ch2.addEventListener("touchend", () => {
    x = (h_w / 2) + (innerWidth / 40);
    y = (innerHeight - h_h) + (h_h / 2) - (innerWidth / 40);
})

let cameralocationdraw = function () {
    if (x - ((h_w / 1.5) / 2) > innerWidth / 40 && x + ((h_w / 1.5) / 2) < (innerWidth / 40) + h_w) {
        harekat_ch2.style.left = x - ((h_w / 1.5) / 2) + "px";
    }
    if (y - ((h_h / 1.5) / 2) > (innerHeight - h_h - (innerWidth / 40)) && y + ((h_h / 1.5) / 2) < (innerHeight - (innerWidth / 40))) {

        harekat_ch2.style.top = y - ((h_h / 1.5) / 2) + "px";
    }
}
let cameralocationupdate = function () {
    if (y < (innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) {
        let y1 = ((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y
        // camera.position.z += -(((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y) / 10
        controls.moveForward((((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y) / 10);

    }
    if (y > (innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) {
        let y1 = ((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y
        // camera.position.z += -(((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y) / 10
        controls.moveForward((((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y) / 10)
    }

    if (x < ((h_w / 2) + (innerWidth / 40))) {
        let y1 = ((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y
        // camera.position.x += -(((h_w / 2) + (innerWidth / 40)) - x) / 10
        controls.moveRight(-(((h_w / 2) + (innerWidth / 40)) - x) / 10)
    }
    if (x > ((h_w / 2) + (innerWidth / 40))) {
        let y1 = ((innerHeight - h_h) + (h_h / 2) - (innerWidth / 40)) - y
        // camera.position.x += -(((h_w / 2) + (innerWidth / 40)) - x) / 10
        controls.moveRight(-(((h_w / 2) + (innerWidth / 40)) - x) / 10)

    }
}



let sina = {
    name: "sina"
}

Object.assign(sina, { famili: "ff" });






///////////////////////////

/////  camera rotation  /////
let harekat_r = document.getElementById("harekat_r");
let harekat_r2 = document.getElementById("harekat_r2");
let xr = ((innerWidth - h_h) - (innerWidth / 40) + h_w / 2);
let yr = ((innerHeight - h_h) - (innerWidth / 40) + h_h / 2);
harekat_r.style.width = h_w + "px";
harekat_r.style.height = h_h + "px";
harekat_r.style.top = (innerHeight - h_h) - (innerWidth / 40) + "px";
harekat_r.style.left = (innerWidth - h_h) - (innerWidth / 40) + "px";

harekat_r2.style.width = h_w / 1.5 + "px";
harekat_r2.style.height = h_h / 1.5 + "px";
harekat_r2.style.left = xr - ((h_w / 1.5) / 2) + "px";
harekat_r2.style.top = yr - ((h_h / 1.5) / 2) + "px";

harekat_r2.addEventListener("touchstart", (e) => {


    xr = e.changedTouches[0].pageX;
    yr = e.changedTouches[0].pageY;


})

harekat_r2.addEventListener("touchmove", (e) => {


    xr = e.changedTouches[0].pageX;
    yr = e.changedTouches[0].pageY;


})
harekat_r2.addEventListener("touchend", () => {
    xr = ((innerWidth - h_h) - (innerWidth / 40) + h_w / 2);
    yr = ((innerHeight - h_h) - (innerWidth / 40) + h_h / 2);
})

let camerarotationdraw = function () {
    if (xr - ((h_w / 1.5) / 2) > (innerWidth - (innerWidth / 40) - h_w) && xr + ((h_w / 1.5) / 2) < innerWidth - (innerWidth / 40)) {
        harekat_r2.style.left = xr - ((h_w / 1.5) / 2) + "px";
    }
    if (yr - ((h_h / 1.5) / 2) > (innerHeight - h_h - (innerWidth / 40)) && yr + ((h_h / 1.5) / 2) < innerHeight - (innerWidth / 40)) {

        harekat_r2.style.top = yr - ((h_h / 1.5) / 2) + "px";
    }
}
let camerarotationupdate = function () {
    // if (yr < (((innerHeight - h_h) - (innerWidth / 40)+h_h/2))) {

    //     camera.rotation.x += -(((innerHeight - h_h) - (innerWidth / 40)+h_h/2) - yr) / 5000
    //     console.log(camera.rotation.x)
    // }
    // if (yr > (((innerHeight - h_h) - (innerWidth / 40)+h_h/2))) {

    //     camera.rotation.x += -(((innerHeight - h_h) - (innerWidth / 40)+h_h/2) - yr) / 5000

    // }

    if (xr < (((innerWidth - h_h) - (innerWidth / 40) + h_w / 2))) {

        camera.rotation.y += (((innerWidth - h_h) - (innerWidth / 40) + h_w / 2) - xr) / 5000

    }
    if (xr > (((innerWidth - h_h) - (innerWidth / 40) + h_w / 2))) {

        camera.rotation.y += (((innerWidth - h_h) - (innerWidth / 40) + h_w / 2) - xr) / 5000


    }
}

/////////////////////////////