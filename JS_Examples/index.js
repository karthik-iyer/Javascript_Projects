
//object literal syntax to create object .... This is an issue with a method inside object
const circle = {
   radius: 1,
   location: {
      x: 1,
      y: 2
   },
   draw: function(){
      console.log('draw');
   }
};

//Factory function. creates an object.
function createCircle(radius){
   return {
      radius,
      draw: function(){
         console.log('draw');
      }
   };
}

circle.draw();

const circle1 = createCircle(1);


console.log(circle1.draw());

//Constructor Function. creates an object 
function Circle(radius){
   this.radius = radius;
   this.draw = function(){
      console.log(`draw ${radius}`);
   }
}

//new causes this to point to the specific object
const another = new Circle(1);
another.draw();


//Constructor Property. Function that creates the object...



//More on Constructors

const circle2 = new Function('radius', `this.radius = radius;
this.draw = function(){
   console.log("draw " + radius);
}`)

Circle.call({},1);

//In Javascript Functions are objects...

function StopWatch(){

   let timerstart = null;
   let timerstop = null;
   let status = "";
   let duration = null;
   this.start = function(){
         if(status === "start"){
           throw Error("Timer already started");
         }
         status = "start";
         timerstart = new Date();
         duration = 0;
   };

   this.stop = function(){
      if(status === "stop"){
         throw Error("Timer already stopped");
       }
       status = "stop";
       timerstop = new Date();
       duration = timerstop - timerstart;
   }

   this.reset = function(){
         timerstart = null;
         timerstop = null;
         duration = 0;
   };

   Object.defineProperty(this,'duration', {
      get: function(){
         return (duration/1000) + " seconds";
      }
   })
}
