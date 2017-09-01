window.addEventListener('load', init, false)
// building everything into an init function
function init () {
  createScene()
  createLights()



  var geometry = new THREE.BoxGeometry(1, 1, 1)
  var material = new THREE.MeshBasicMaterial({color: 0x00ffff})
  var cube = new THREE.Mesh(geometry, material)
  scene.add(cube)



  animate()
}
// Scene includes the scene, camera, and renderer, which will be attached to the HTML container
var scene, camera, container, renderer, container
function createScene() {

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


var animate = function () {
  requestAnimationFrame(animate)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camera)
}
