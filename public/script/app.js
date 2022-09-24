
import * as THREE from 'three';



import Stats from './jsm/libs/stats.module.js';

import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { PointerLockControls } from './jsm/controls/PointerLockControls.js';
import { FBXLoader } from './jsm/loaders/FBXLoader.js';
import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
import { RGBELoader } from './jsm/loaders/RGBELoader.js';

let htriTextureURL = new URL('../house/textures/soliltude_4k.hdr', import.meta.url);
export let camera, scene, renderer, stats, controls, loader;


const clock = new THREE.Clock();

let mixer;
let objects = {};

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

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 2000);
    camera.rotation.set(0,0, 0)
    camera.position.set(100, 80, 0)

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
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setSize(window.innerWidth, window.innerHeight);

    container.appendChild(renderer.domElement);
    ////////////////////


    ///// control  //////
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 80, 0);
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
    loader = new GLTFLoader();

    const rgbeloder = new RGBELoader();
    rgbeloder.load(htriTextureURL, function (tex) {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        // scene.background = tex;
        scene.environment = tex;
    })
    ///////////////////

    //////lights/////
    var ambientlight = new THREE.AmbientLight(0xaaaaaa, 1);
    // scene.add(ambientlight);


    addspotlight('light2', 1, new THREE.Color(1, 1, 1), new THREE.Vector3(583, 486, 171));
    addspotlight('light1', 1, new THREE.Color(1, 1, 1), new THREE.Vector3(226, 410, 529));



    //////////////////

    /////  add models  /////



    let object = new AddGltfmodels(2, "darvaze", "darvaze.glb", 0, 0, 0);
    // let dar_chap = new AddGltfmodels(2, "dar_chap", "dar_chap.glb", 0, 0, 0);
    // let dar_rast = new AddGltfmodels(2, "dar_rast", "dar_rast.gltf", 0, 0, 0);

    console.log(object)

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
window.addEventListener("click",e => {
    select_animacions(e)
});
window.addEventListener("touchstart",e => {
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
            
            
            let name = intersects[0].object.name;
            console.log(name);
            let object = scene.getObjectByName(name)
            objects[name].play(name);
            console.log(object);
           
        }
}

// document.getElementById("sahne").addEventListener("mousedown", onDocumentMouseDown2, false);
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

    ////////// GLB
   
}
function Animacion(object) {
    this.object = object;
    this.tedad_animacion = this.object.animations.length;
    this.animacion_durum = 0;
}
Animacion.prototype.play = function(name) {
    let object = scene.getObjectByName(name);
    if(this.animacion_durum > this.tedad_animacion-1) {
        this.animacion_durum = 0;
    }
    if(this.tedad_animacion > 0 ){
        mixer = new THREE.AnimationMixer(object);
        let action = mixer.clipAction(object.animations[this.animacion_durum]);
        action.setLoop(THREE.LoopOnce);
        action.clampWhenFinished = true;
        action.enable = true;

        action.play();
        this.animacion_durum++;
    }
}


function AddGltfmodels(tedad, name, path, x, y, z) {
    this.loader = new GLTFLoader();
    this.loader.load('../house/' + path, function (object) {

        
        object.scene.name = name;
        object.scene.animations = object.animations;
       
        object.scene.children.forEach(element => {
            object.animations.forEach(e => {
                let name = element.name;
                let name1 = name.split("");
                let name2 = e.name;
                let name3 = name2.split("");
                let name1_length = name1.length;
                let shomar = 0;
                for (let index = 0; index < name1.length; index++) {
                    let a = name1[index];
                    let b = name3[index];
                    if (a == b) {
                        shomar++;
                    }
                    
                }
                if(shomar == name1.length) {
                    element.animations.push(e);
                }
                
            })
            // element.animations = object.animations;
            element.children.forEach(element_ => {
                element_.animations = object.animations;
                element_.name = element.name;
            })
            objects[element.name] = new Animacion(element);
        });
       
        // object.position.set(x, y, z);


        object.scene.castShadow = true;
        object.scene.receiveShadow = true;

        // object.traverse(function (child) {

        //     if (child.isMesh) {

        //         child.castShadow = true;
        //         child.receiveShadow = true;

        //     }

        // });
        
        scene.add(object.scene);
       

        console.log(objects)

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

