

// let laoding = document.getElementById("laoding");
// laoding.style.width = innerWidth + "px";
// laoding.style.height = innerHeight + "px";



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
    // console.log(camera.position.x)


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



import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';



import Stats from 'https://unpkg.com/three@0.127.0/examples/jsm/libs/stats.module.js';

import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/PointerLockControls.js';
import { FBXLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/FBXLoader.js';
import { RGBELoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/RGBELoader.js';

let htriTextureURL = new URL('../house/textures/soliltude_4k.hdr', import.meta.url);
export let camera, scene, renderer, stats, controls, loader;


const clock = new THREE.Clock();

let mixer;

let actid = [];
let actdurum = [];
let tedadanim = [];

let ahshap = [];
let tezgah = [];
let parket = [];



init();
animate();

function init() {

    /////gui/////
    var gui = new dat.GUI();
    // var folder = gui.addFolder('folder');

    /////////////

    /////sahne/////
    const container = document.getElementById('sahne');

    //////////////


    /////camera/////

    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 2000);
    camera.rotation.set(0, 88.635, 0)
    camera.position.set(838, 247, 851)

    // camera.lookAt(new THREE.Vector3(10, 0, 0))

    // camera.position.set(100, 500, 300);


    ////////////////

    /////scene/////
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    // scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);
    ///////////////




    ///// ground  /////
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
    mesh.rotation.x = - Math.PI / 2;
    mesh.receiveShadow = true;
    // scene.add(mesh);

    const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    // scene.add(grid);
    ///////////////////

    /////  renderer /////
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPerformance: 'high-performance',
        physicallyCorrectLight: true,
        antialias: true
    });
    // renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);
    ////////////////////


    ///// control  //////
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    // controls = new PointerLockControls(camera, document.body);

    // add event listener to show/hide a UI (e.g. the game's menu)

    controls.addEventListener('lock', function () {

        menu.style.display = 'none';

    });

    controls.addEventListener('unlock', function () {

        menu.style.display = 'block';

    });

    //////////////////////

    /////  resize  //////

    /////////////////////


    //// stats  /////
    stats = new Stats();
    // container.appendChild(stats.dom);

    ////////////////


    ///// loader  /////
    loader = new FBXLoader();

    const rgbeloder = new RGBELoader();
    rgbeloder.load(htriTextureURL, function (tex) {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        // scene.background = tex;
        scene.environment = tex;
    })
    ///////////////////

    //////lights/////
    var ambientlight = new THREE.AmbientLight(0xaaaaaa, 1);
    scene.add(ambientlight);


    addspotlight('light2', 1, new THREE.Color(1, 1, 1), new THREE.Vector3(583, 486, 171));
    addspotlight('light1', 1, new THREE.Color(1, 1, 1), new THREE.Vector3(226, 410, 529));



    //////////////////

    /////  add models  /////



    addfbxmodels(2, "tezgah1", "darvaze.fbx", 200, 0, 200);
    // addfbxmodels(2, "tezgah2", "tezgah2.fbx", 200, 0, 200);
    // addfbxmodels(2, "ahsap1", "ahsap1.fbx", 200, 0, 200);
    // addfbxmodels(2, "ahsap2", "ahsap2.fbx", 200, 0, 200);
    // addfbxmodels(2, "ahsap2", "parket.fbx", 200, 0, 200);

    let s_x = -innerWidth / 25;
    for (let index = 1; index <= 4; index++) {
        const geometry = new THREE.SphereGeometry(innerWidth / 100, 100, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.set(s_x, -30, -40)

        sphere.name = "dayere" + index;
        camera.add(sphere);
        s_x += innerWidth / 40;

    }


    // addfbxmodels1(2, "cube2", "lamp.fbx", 200, 0, 200);

    ////////////////////////



    // addobject("cube1", 100, 100, 100, 300, 0, 0, "chaman", new THREE.Color(0xffffff));
    ///////////////////


    /////  tag fotos  /////



    ///////////////////////
    // gui.add(camera.getObjectByName('dayere').position, 'x', -1000, 2000);
    // gui.add(camera.getObjectByName('dayere').position, 'y', -1000, 2000);
    // gui.add(camera.getObjectByName('dayere').position, 'z', -1000, 2000);









}



/////  select  /////
document.getElementById("sahne").addEventListener("mousedown", onDocumentMouseDown, false);
function onDocumentMouseDown(event) {

    if (event.button == 0) {
        var mouse = new THREE.Vector2();
        mouse.x = (event.layerX / $('#sahne').width()) * 2 - 1;
        mouse.y = -(event.layerY / $('#sahne').height()) * 2 + 1;
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {

            let object = scene.getObjectById(intersects[0].object.id - 1)
            if (object.animations.length > 0) {

                let actidd = actid.indexOf(object.id)
                let tedad = tedadanim[actidd];
                if (tedad == object.animations.length) {
                    tedad = 0;
                } else {
                    tedad = object.animations.length - tedadanim[actidd]
                }


                if (actdurum[actidd] > 0 && actdurum[actidd] < object.animations.length - tedad) {

                    let index = actdurum[actidd];
                    mixer = new THREE.AnimationMixer(object);
                    const action = mixer.clipAction(object.animations[index]);
                    action.setLoop(THREE.LoopOnce);
                    action.clampWhenFinished = true;
                    action.enable = true;

                    action.play();
                    actdurum[actidd] += 1;
                } else {
                    actdurum[actidd] = 0
                    let index = actdurum[actidd];
                    mixer = new THREE.AnimationMixer(object);
                    const action = mixer.clipAction(object.animations[index]);
                    action.setLoop(THREE.LoopOnce);
                    action.clampWhenFinished = true;
                    action.enable = true;

                    action.play();
                    actdurum[actidd] = 1;

                }

            }
        }



    }


}

document.getElementById("sahne").addEventListener("mousedown", onDocumentMouseDown2, false);
function onDocumentMouseDown2(event) {
    console.log(event)
    if (event.button == 0) {
        var mouse = new THREE.Vector2();
        mouse.x = (event.layerX / $('#sahne').width()) * 2 - 1;
        mouse.y = -(event.layerY / $('#sahne').height()) * 2 + 1;
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {


            let object = scene.getObjectById(intersects[0].object.id - 1)
            scene.getObjectById(intersects[0].object.id - 1).material[0]= tezgah[2]
            console.log(object)


        }



    }


}





/////////////////////

/////  add light  /////
function addspotlight(name, intensity, color, pos) {
    const spotLight = new THREE.PointLight(0xffffff, .5);
    spotLight.name = name
    spotLight.position.set(pos.x, pos.y, pos.z);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.whith = 4096;
    spotLight.shadow.mapSize.height = 4096;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    // spotLight.decay = 1000;
    spotLight.power = 9;
    // spotLight.distance = 1;

    scene.add(spotLight);
    scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
}

///////////////////////

/////  add objects  /////
function addobject(name, w, h, d, x, y, z, color) {
    /////object/////
    const geometry = new THREE.BoxGeometry(w, h, d);
    // const material = new THREE.MeshStandardMaterial({ color: color });
    /////glass/////
    const material = new THREE.MeshPhysicalMaterial({
        roughness: 0,
        transmission: .2, // Add transparency
    });
    //////////////  
    const cube = new THREE.Mesh(geometry, material);
    cube.name = name;
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    cube.castShadow = true;
    cube.receiveShadow = true;

    scene.add(cube);
    ///////////////
}

function addfbxmodels(tedad, name, path, x, y, z) {
    loader.load('../house/' + path, function (object) {
        object.name = name;

        actid.push(object.id);
        actdurum.push(0)
        tedadanim.push(tedad);

        // object.position.set(x, y, z);


        object.castShadow = true;
        object.receiveShadow = true;

        object.traverse(function (child) {

            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;

            }

        });

        scene.add(object);


    });
}
function addfbxmodels1(tedad, name, path, x, y, z) {
    loader.load('../public/house/' + path, function (object) {
        // object.name = name;

        actid.push(object.id);
        actdurum.push(0)
        tedadanim.push(tedad);

        object.material = new THREE.MeshLambertMaterial({
            emissive: new THREE.Color(0.2, 0.3, 0.3),
            emissiveIntensity: 10,
        });

        // object.position.set(x, y, z);


        object.castShadow = true;
        object.receiveShadow = true;

        object.traverse(function (child) {

            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;

            }

        });

        scene.add(object);

    });
}

setTimeout(hide, 1000);
function hide() {
}



//////////////////////////


/////  animation  /////////


function animate() {

    requestAnimationFrame(animate);

    cameralocationdraw();
    cameralocationupdate();
    camerarotationdraw();
    camerarotationupdate();


    const delta = clock.getDelta();

    if (mixer) mixer.update(delta);

    renderer.render(scene, camera);

    stats.update();

}

//////////////////////////

/////  taghir rang  /////
// let taghirrang_time = setInterval(taghirrang, 1000);
function taghirrang() {
    console.log(scene.children.length)
    if (scene.children.length >= 0) {
        // document.getElementById("laoding").remove();
        ////////
        let shishe_sharab = new THREE.MeshPhysicalMaterial({ roughness: 0, transmission: 1, thickness: 2, color: new THREE.Color(0x121212) });
        let jame_sharab = new THREE.MeshPhysicalMaterial({
            roughness: 0,
            transmission: 1,
            thickness: 2,
            color: new THREE.Color(0xffffff)
        });
        let metal = new THREE.MeshStandardMaterial({
            // transmission: 1, 
            roughness: 0.1,
            metalness: 1
        });
        for (let index0 = 0; index0 < scene.children.length; index0++) {
            let name = scene.children[index0].name;

            if (name == "ahshap1" || name == "ahshap2" || name == "tezgah1" || name == "tezgah2") {

                for (let index = 0; index < scene.getObjectByName(name).children.length; index++) {

                    for (let index1 = 0; index1 < scene.getObjectByName(name).children[index].material.length; index1++) {
                        if (scene.getObjectByName(name).children[index].material[index1].name == "Material.002") {
                            scene.getObjectByName(name).children[index].material[index1] = shishe_sharab;


                        }

                        if (scene.getObjectByName(name).children[index].material[index1].name == "jamesharab") {
                            scene.getObjectByName(name).children[index].material[index1] = jame_sharab;



                        }

                        if (scene.getObjectByName(name).children[index].material[index1].name == "Default OBJ.009") {
                            scene.getObjectByName(name).children[index].material[index1] = metal;


                        }


                    }

                }
            }


        }

        for (let index = 1; index <= 7; index++) {
            tezgah.push(scene.getObjectByName("tas" + index).material[1]);

        }
        // for (let index = 1; index <= 14; index++) {
        //     ahshap.push(scene.getObjectByName("ahsap" + index).material[1]);

        // }
        // for (let index = 1; index <= 5; index++) {
        //     parket.push(scene.getObjectByName("kaf" + index).material[1]);

        // }

        // for (let index = 1; index <= 4; index++) {

        //     camera.getObjectByName("dayere" + index).material = tezgah[index]

        // }

        scene.add(camera)
        clearInterval(taghirrang_time);
    }


}

/////////////////////////



/////  resize  /////
window.addEventListener("resize", (e) => {


    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
});

window.addEventListener("load", () => {
    // document.getElementById("laoding").remove()
})





////////////////////

