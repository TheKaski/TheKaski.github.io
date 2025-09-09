+++
title = 'Basic driving simulator in the web'
date = 2024-04-09T16:53:55+03:00
draft = false
summaryText = "In this project I implemented a simple 3D environment and a cute delivery robot vehicle using Blender and rendered them in a browser environment using React.js and Three.js. I used CANNON.js to implement basic physics such as rigidbodies, ground, gravity and friction. "
+++

{{< figure src="./thumbnail.png" title="The simple 3D environment was rendered in the browser and contained basic physics, lights and controls for driving around a track" alt="Screenshot from the 3D environment" width="400px" height="200" >}}

# Introduction

This project was conducted as a hobby project for testing new technologies such as rendering physics and 3D objects in browser environment. 

This project used a object-oriented design when implementing various parts of the application such as the game, vehicle and the camera.

Code example below represents how the vehicle class extends basic logic of the CANNON.js Raycast Vehicle.

```javascript
class Car extends CANNON.RaycastVehicle {
    constructor({vehicleBody, tireRadius, tireWidth, tireColor, tireRotation, tireMass, tireFriction, tireAngularDamping, axis, world, scene, wheelMesh = undefined }) {
        super(new CANNON.RaycastVehicle({chassisBody: vehicleBody, 
            indexRightAxis: 0,
			indexUpAxis: 1,
			indexForwardAxis: 2
        }));
        //Defining options for the car wheels
        this.options = {
            radius: 0.20,
            directionLocal: new CANNON.Vec3(0, -1, 0),
            suspensionStiffness: 20,
            suspensionRestLength: 0.25,
            frictionSlip: 0.85,
            skidInfo: 10,
            dampingRelaxation: 2,
            dampingCompression: 2.4,
            maxSuspensionForce: 500,
            rollInfluence:  0.5,
            axleLocal: new CANNON.Vec3(-1, 0, 0),
            chassisConnectionPointLocal: new CANNON.Vec3(1, 0,0),
            maxSuspensionTravel: 0.5,
            customSlidingRotationalSpeed: 200,
            useCustomSlidingRotationalSpeed: true
          };

          this.constants = {
            maxSteerVal: Math.PI/8,
            maxForce: 30,
          }

        this.world = world;
        this.scene = scene;
        this.light = this.addLights();
        
        if(wheelMesh) this.wheelMesh = wheelMesh;

        //Add the body mesh to the scene
        this.scene.add(vehicleBody.mesh);
        //Add the car to the world
        this.addToWorld(this.world);

        this.wheelBodies = [];
        //Add wheels based on this.options to the vehicle. These wheels are stored in this.wheelInfos of the raycastVehicle:
        this.addWheels();
        
        //Create the wheel obejcts and store them in this.wheelBodies
        this.createWheelBodies();
        
        //Call the update method to make sure everything is synced at start:
        this.update();     
         
    }

```
The physics library allows to customize the behaviour of physics elements and parts of the vehicle in various ways. For this code the behaviour and user experience could be enhanced a lot by tweaking these settings but since this was a fun little side project the settings provided worked well for the use case

{{<github repo="TheKaski/ReactThree" text="Code for this project can be viewed in my Github">}}
