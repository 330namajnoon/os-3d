

import * as THREE from 'three';
import Stats from './jsm/libs/stats.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { PointerLockControls } from './jsm/controls/PointerLockControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';
import { EffectComposer } from './jsm/postprocessing/EffectComposer.js';
import { RenderPass } from './jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from './jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from './jsm/postprocessing/ShaderPass.js';

let htriTextureURL = new URL('../textures/htri.exr.', import.meta.url);
let camera, scene, renderer, stats, controls, loader, composer;
let laoding = document.getElementById("laoding");
laoding.style.width = innerWidth+"px";
laoding.style.height = innerHeight+"px";

const clock = new THREE.Clock();

let mixer;
let objects = {};

let actid = [];
let actdurum = [];
let tedadanim = [];

let ahshap = [];
let tezgah = [];
let parket = [];

const params = {
    exposure: 1,
    bloomstrength: 1.5,
    bloomthreshold: 0,
    bloomradius: 0
}

let colors = {};


init();
animate();

function init() {

    /////gui/////
    // var gui = new dat.GUI();
    // var folder = gui.addFolder('folder');

    /////////////

    /////sahne/////
    const container = document.getElementById('sahne');

    //////////////


    /////camera/////

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);
    camera.rotation.set(0, 0, 0)
    camera.position.set(-30, 50, -30)

    // camera.lookAt(new THREE.Vector3(10, 0, 0))

    // camera.position.set(100, 500, 300);


    ////////////////

    /////scene/////
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 200, 500);
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
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    ////////////////////


    ///// control  //////
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(-20, 30, -0);
    controls.update();






    ///// loader  /////
    loader = new GLTFLoader();

    // const rgbeloder = new RGBELoader();
    // rgbeloder.load(htriTextureURL, function (tex) {
    //     tex.mapping = THREE.EquirectangularReflectionMapping;
    //     // scene.background = tex;
    //     scene.environment = tex;
    // })
    ///////////////////

    //////lights/////



    addspotlight('light1', 10, new THREE.Color(1, 1, 1), new THREE.Vector3(-140, 510, -183));




    //////////////////

    /////  add models  /////



    let object = new AddGltfmodels(1, "object", "dolap.glb");


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




    ////////////////////////



    // addobject("cube1", 100, 100, 100, 300, 0, 0, "chaman", new THREE.Color(0xffffff));
    ///////////////////



    // gui.add(scene.getObjectByName('light1').position, "x", -1000, 1000);
    // gui.add(scene.getObjectByName('light1').position, 'y', -1000, 1000);
    // gui.add(scene.getObjectByName('light1').position, 'z', -1000, 1000);


    ///////////  efect  /////////

    // const poinlight = new THREE.PointLight(0xffffff, 1);
    // camera.add(poinlight);

    // const renderScene = new RenderPass(scene,camera);

    // const bloomPass = new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),1.5,0.4,0.85);
    // bloomPass.threshold = params.bloomthreshold;
    // bloomPass.strength = params.bloomstrength;
    // bloomPass.radius = params.bloomradius;

    // composer = new EffectComposer(renderer);
    // composer.addPass(renderScene);
    // composer.addPass(bloomPass);

    // gui.add(params,'exposure',0.1,2).onChange(function(value){
    //     renderer.toneMappingExposure = Math.pow(value,4.0);
    // })
    // gui.add(bloomPass,'threshold',0,100);
    // gui.add(bloomPass,'strength',0,100);
    // gui.add(bloomPass, 'radius', 0,100);
    // gui.add(poinlight,"power", 0,100);
}



/////  select  /////
window.addEventListener("click", e => {
    select_animacions(e)
});
window.addEventListener("touchstart", e => {
    select_animacions(e.touches[0]);
});
function select_animacions(event) {
    let raycaster = new THREE.Raycaster();
    let click = new THREE.Vector2();
    click.x = (event.layerX / innerWidth) * 2 - 1;
    click.y = -(event.layerY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(click, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        let object_ = intersects[0];
        objects["object"].play(object_);
    }
}

// document.getElementById("sahne").addEventListener("mousedown", onDocumentMouseDown2, false);
function onDocumentMouseDown2(event) {
    if (event.button == 0) {
        var mouse = new THREE.Vector2();
        mouse.x = (event.layerX / $('#sahne').width()) * 2 - 1;
        mouse.y = -(event.layerY / $('#sahne').height()) * 2 + 1;
        var raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(scene.children);
        if (intersects.length > 0) {
            let object = scene.getObjectById(intersects[0].object.id - 1)
            scene.getObjectById(intersects[0].object.id - 1).material[0] = tezgah[2]
        }
    }
}





/////////////////////

/////  add light  /////
function addspotlight(name, intensity, color, pos) {
    let spotLight = new THREE.SpotLight(0xffffff,intensity);
    spotLight.name = name
    spotLight.position.set(pos.x, pos.y, pos.z);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.whith = 4096;
    spotLight.shadow.mapSize.height = 4096;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    spotLight.decay = 1000;
    // spotLight.power = 10;
    // spotLight.distance = 1;
    scene.add(spotLight);
    // scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
}

///////////////////////

/////  add objects  /////
function Serch(obj, name) {
    let element;
    obj.forEach(e => {
        if (e.name == name) {
            element = e;
        }
    })
    return element;
}


function Animacion(object) {
    this.object = object;
    this.chekmece_anim = {
        durum: "close",
        open: ["cekmece"],
        close: ["cekmece.001"]
    }
    this.colors_durum = {
        durum: "open",
        open: ["color", "color.001", "color.002", "color.003"],
        close: ["colorr", "colorr.001", "colorr.002", "colorr.003"]
    }

    this.tedad_animacion = this.object.animations.length;
    this.animacion_durum = 0;
}
Animacion.prototype.play = function (object_) {
    let name = object_.object.name;
    let color = object_.object.name;
    let color1 = color.split("");
    let color2 = Number(color1[1]);

    let object = scene.getObjectByName("object");
    
    if (name == "Cube027_1") {
        mixer = new THREE.AnimationMixer(object);
        let durum = this.chekmece_anim.durum;
        this.chekmece_anim[durum].forEach(e_ => {
            let action = mixer.clipAction(Serch(object.animations, e_));
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.enable = true;
            action.play();
        })
        if (this.chekmece_anim.durum == "open") {
            this.chekmece_anim.durum = "close";
        } else {
            this.chekmece_anim.durum = "open";
        }
    }
    if (name == "Cube023" || name == "badane_ahsap" || name == "parket") {
        mixer = new THREE.AnimationMixer(object);
        let durum = this.colors_durum.durum;
        this.colors_durum[durum].forEach(e_ => {
            let action = mixer.clipAction(Serch(object.animations, e_));
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            action.enable = true;
            action.play();
        })
        if (this.colors_durum.durum == "open") {
            this.colors_durum.durum = "close";
        } else {
            this.colors_durum.durum = "open";
        }
    }
    if (color == "c" + color2 + "") {
        let shomar = 0;
        object.children.forEach(e => {

            if (shomar !== 4 && shomar !== 5 && shomar !== 6 && shomar !== 7) {
                e.children.forEach(e1 => {
                    if (e1.material.name == "duz") {
                        e1.material = colors["c" + color2 + ""]["duz_" + color2 + ""];
                        e1.material.name = "duz";
                    }
                    if (e1.material.name == "ahsap") {
                        e1.material = colors["c" + color2 + ""]["ahsap_" + color2 + ""];
                        e1.material.name = "ahsap";
                    }
                })
                if (e.material !== undefined) {
                    if (e.material.name == "duz") {
                        e.material = colors["c" + color2 + ""]["duz_" + color2 + ""];
                        e.material.name = "duz";
                    }
                    if (e.material.name == "ahsap") {
                        e.material = colors["c" + color2 + ""]["ahsap_" + color2 + ""];
                        e.material.name = "ahsap";
                    }
                }
            }

            shomar++;
        })
    }
}


function AddGltfmodels(tedad, name, path, x, y, z) {
    this.loader = new GLTFLoader();
    this.loader.load('../house/' + path, function (object) {
        object.scene.name = name;
        object.scene.animations = object.animations;
        objects[name] = new Animacion(object.scene);
        object.scene.castShadow = true;
        object.scene.traverse(function(node){
            if(node.isMesh) {
                node.castShadow = true;
            }
        })
        object.scene.children.forEach(e => {
            e.castShadow = true;
        })
        // object.position.set(x, y, z);
        object.scene.receiveShadow = true;
        scene.add(object.scene);
    });
}






//////////////////////////


/////  animation  /////////


function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
    // composer.render();
}

//////////////////////////

/////  taghir rang  /////
let taghirrang_time = setInterval(taghirrang, 1000);
function taghirrang() {
    
    if (scene.children.length >= 2) {
        document.getElementById("laoding").remove();
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
        let lamp_ghermez = new THREE.MeshStandardMaterial({
            emissive: new THREE.Color("#ff0000"),
            color: new THREE.Color("#ff0000"),

        });

        scene.children.forEach(element1 => {
            element1.children.forEach(element2 => {
                element2.children.forEach(element3 => {
                    if (element3.material.name == "pol_ghermez") {
                        element3.material = lamp_ghermez;
                    }

                })

            })
        })

        scene.getObjectByName("object").children.forEach(e => {
            let name = e.name;
            if (name == "c1" || name == "c2" || name == "c3" || name == "c4") {
                let c = {};
                e.children.forEach(e_ => {
                    e_.name = e.name;
                    c[e_.material.name] = e_.material;
                })
                colors[name] = c;
            }

        });
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



