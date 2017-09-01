# 3Dexperiments

In this introduction to 3D JavaScript, we're going to build a flying object with Three.js! This would be useful if you wanted to have a rotating logo on your site, create a game where the object has to fly to catch points, or model a real world object online for use in AR or VR.

## HTML & CSS
1. Import three.js library into HTML header
2. Create a container element in HTML to hold the rendered scene ```<div id="world"></div>)```
3. Using CSS, style the element to fill the viewport ```width: 100%; height: 100%```

## JavaScript
1. Define an init function to contain all the main functions we need to create including:
2. CreateScene function
- This includes the scene, camera, and renderer, which will be attached to the HTML container
3. CreateLights function
- This declares how light will be established on the screen
4. CreateBox function
- This is where we create our object by defining its geometry, material, and then mesh
- Note: Material colors need to be defined in hexadecimal value,  eg. ```0xffffff```
5. Animate function which describes how we want the object to behave

## Q&A
- **Why did you choose this subject? How were you first made aware of it?**
- I chose this topic because I am interested in VR and games, and 3D development is commonly used in both. I first became aware of it on a job application I was interested in, and so when I saw it on the list of options for this assignment, I decided to teach myself!

- **What problem does it solve?**
- Three.js is a cross-browser JavaScript library/API used to create and display animated 3D graphics. It is incredibly lightweight, and has gained enough popularity to be supported by many browsers. It also allows for immense customization and abstraction, so you can essentially create anything if you have the right math for the shape.

- **How does it solve the problem (conceptually)?**
- Rather than having to learn the complex syntax of GSLS for 3D images, Three.js allows you to create 3D images in familiar JavaScript. Additionally, because you do not have to compile the code before each run, it allows for animations to be handled by the browser's settings vs. through setTimeOut intervals.

- **What are the alternatives? What is it similar to, if anything?**
- You can use WebGL directly to build 3D objects, but if you want to focus more on the graphics and animation vs. how graphics interact with hardware, Three.js is a better option. Other high-level libraries include GLGE, SceneJS, and PhiloGL.

- **What is the history of this technology? Who built it and why? Who is maintaining it?**
- Three.js was released by [Ricardo Cabello](https://github.com/mrdoob/three.js/issues/1960) in 2010 after his involvement with the demoscene of the early 2000s. After first writing it in ActionScript, he switched over the JavaScript to allow for platform independence and to avoid compiling the code before each run. It is now maintained by 650 contributors via [GitHub](https://github.com/mrdoob/three.js/) with a robust documentation and sample library available at [Three.js.org](https://threejs.org/).

- **What is your opinion on the technology after having built something with it?**
- I'm obsessed and can't wait to keep building things! I did a little bit of 3D modeling and development using Maya and the Unreal Engine in college, but Three.js offers so much more flexibility and a robust library of gemometries, materials, etc. that it's possible to build your objects directly with JavaScript. I see use cases for games, for building VR/AR environments, and even for enhanced data visualization.

- **What are the biggest conceptual hurdles (if any) you encountered when researching this?**
- Math. The biggest hurdle for me was remembering all of the different formulas for geometric objects. Fortunately, the robust documentation helps you identify which params are needed (heigh, width, depth, etc.) and with some tinkering, you quickly get the hang of it. I would encourage any beginner to start small with a simple shape like a cube or sphere and then scale up from there.

- **What resources do you recommend for interested students? What article or forum was most helpful to you in learning this?**
- The [Three.js.org](https://threejs.org/) documentation was the most helpful from an explanation and inspiration standpoint. They have an [introductory tutorial](https://threejs.org/docs/index.html#manual/introduction/Creating-a-scene) and myriad [examples](https://threejs.org/examples/) of it in action. After following their tutorial to make a basic cube, I began experimenting with lights, different materials, positioning, and then added more objects.

- **What are 3 interview questions one might be asked about this technology?**
1. What is Three.js?
- Since this language is not widely used yet, you may have to explain that it is an open source JS 3D library that allows you to make and display animated and interactive 3D graphics without proprietary plug-ins.
2. What are key features of Three.js?
- As you can see in my code example, the key features are scenes, cameras, lights, renderers, and objects which need geometries, materials, and mesh. There are many additional features, but these are the essentials.
3. How can one set a transparent background in Three.js?
- Pass in the alpha parameter to the WebGLRenderer so that your background/rest of the site is visible behind the animation.
```var renderer= new THREE.WebGLRenderer( { alpha: true} ) ```
