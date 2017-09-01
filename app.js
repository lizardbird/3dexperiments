window.addEventListener('load', init, false)
// building everything into an init function
function init () {
  // set up the scene
  createScene()
  // add the lights
  createLights()
  // add the objects
  createBox()
  // go!
  animate()
}

// SCENE
// Scene includes the scene, camera, and renderer, which will be attached to the HTML container
var scene, camera, container, renderer, container
function createScene() {
  console.log("creating scene");
  // the scene is basically the stage where the object will be added
  scene = new THREE.Scene()

  // the camera is the view of the object, we're using the PerspectiveCamera which mimics how the human eye sees
  // set the PerspectiveCamera(field_of_view, aspect_ratio, near_plane, far_plane)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  // set the camera position
  camera.position.z = 200
  camera.position.x = 0
  camera.position.y = 100

  // renderer displays the scene using webGL - Web Graphics Library which is a JS API for rendering 3D graphics with any compatible web browser through plug-ins
  renderer = new THREE.WebGLRenderer({

    // allow transparency to show background defined in css
    alpha: true
  })

  // set size to full screen
  renderer.setSize(window.innerWidth, window.innerHeight)

  // enable shadows
  renderer.shadowMap.enabled = true

  //add the DOM element of the renderer to the container in HTML
  container = document.getElementById('world')
  container.appendChild(renderer.domElement)
}


// LIGHTS
// There are several Three.js lights, we are going to add one light directly above the scene (hemisphereLight) with color fading from sky color to ground color
// and we are going to add one directional light that seems to shine infinitely far way - like the sun, this is great for making shadows
var hemisphereLight, shadowLight
function createLights(){
  console.log('creating lights');
  // new HemisphereLight(sky_color, ground_color, intensity)
  hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9)

  // new directional light for our shadows DirectionalLight(hex, intensity)
  shadowLight = new THREE.DirectionalLight(0xffffff, .9)

  // to activate the lights, add them to the scene
  scene.add(hemisphereLight)
  scene.add(shadowLight)
}

// OBJECTS
// You can add many types of objects, including custom made ones. Three.js has some primitve ones built in - like a cube, cylinder, sphere, etc.
// By combining these gemometries, you can make more complex shapes. The basic steps to creating an object are:
// Create a geometry
// Create a material
// Pass them into a mesh
// add the mesh to our scene

// define a new object called Box
Box = function() {
  // new Box (width, height, depth, widthSegments, heightSegments, depthSegments)
  var geometry = new THREE.BoxGeometry(100, 100, 100)

  // materials describe the appearance of objects, we're using the phong material because it is good for reflecting our lights
  var material = new THREE.MeshNormalMaterial({color: 0x00ffff})

  // lastly, to create our object, we have to combine the geometry and the material to create a mesh
  this.mesh = new THREE.Mesh(geometry, material)

}
var box

function createBox() {
  console.log('creating box');
  box = new Box()
  box.mesh.position.y =  100
  console.log(box);
  scene.add(box.mesh)
}




var animate = function () {
  // tell the browser that we are going to do an animation
  requestAnimationFrame(animate)

// rotate the cube
  box.mesh.rotation.x += 0.01
  box.mesh.rotation.y += 0.01

  // render the scene
  renderer.render(scene, camera)
}
