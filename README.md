# 3dexperiments

We're going to build a flying object in Three.js! This would be useful if you wanted to create a game where the object has to fly to catch points.

HTML & CSS
1. Import three.js library into HTML header
2. Create a container element in HTML to hold the rendered scene ```<div id="world"></div>)```
3. Style it to fill the viewport

JavaScript
1. Define init function to contain all the main functions we need to create including:
2. CreateScene function which includes the scene, camera, and renderer, which will be attached to the HTML container
3. CreateLights function which declares how light will be established on the screen
4. CreateBox function which is where we create our object by defining its geometry, material, and then mesh
5. Animate function which describes how we want the object to behave

Why did you choose this subject? How were you first made aware of it?
I chose this topic because I am interested in VR and games, and 3D development is commonly used in both. I first became aware of it on a job application I was interested in, and so when I saw it on the list of options for this assignment, I decided to teach myself!

What problem does it solve?
Three.js is a cross-browser JavaScript library/API used to create and display animated 3D graphics. It is incredibly lightweight, and has gained enough popularity to be supported by many browsers. It also allows for immense customization and abstraction, so you can essentially create anything if you have the right math for the shape.

How does it solve the problem (conceptually)?
Rather than having to learn the complex syntax of GSLS for 3D images, Three.js allows you to create 3D images in familiar JavaScript. Additionally, because you do not have to compile the code before each run, it allows for animations to be handled by the browser's settings vs. through setTimeOut intervals.

What are the alternatives? What is it similar to, if anything?
You can use WebGL directly to build 3D objects, but if you want to focus more on the graphics and animation vs. how graphics interact with hardware, Three.js is a better option. Other high-level libraries include GLGE, SceneJS, and PhiloGL.


What is the history of this technology? Who built it and why? Who is maintaining it?


What is your opinion on the technology after having built something with it?

What are the biggest conceptual hurdles (if any) you encountered when researching this?

What resources do you recommend for interested students?

What article or forum was most helpful to you in learning this?

What are 3 interview questions one might be asked about this technology?
