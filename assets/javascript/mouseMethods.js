/**********************************************
 * Current Variables
 * ==================================
 ***********************************************/
// canvas element
let canvas = document.getElementById("canvas");
// drawing context
let context = canvas.getContext("2d");
// canvas draft element (e.g., when you are dragging the image)
let canvasDraft = document.getElementById("canvasDraft");
// drawing context
let contextDraft = canvasDraft.getContext("2d");
// current function variable
let currentFunction;
// keep track of whether or not the user is dragging the mouse
let dragging = false;
// keep track of current color stroke
let colorStroke = "#42445A";
// keep track of curerent color fill
let colorFill = "#42445A";
// keep track of width of line
let width = 3;
/**********************************************
 * Capture Mouse Event
 * ==================================
 * Given event, assign the mouse to the current x and y coordinate
 ***********************************************/
function captureMouseEvent(event) {
  this.xCoordinate = event.offsetX;
  this.yCoordinate = event.offsetY;
}
/**********************************************
 * On mouse down...
 * ==================================
 * Turn dragging to true
 * Console.log
 * Capture x and y coordinates
 * Apply the on mouse down method to the current function
 ***********************************************/
$("#canvas").mousedown(function (event) {
  dragging = true;
  console.log("Mouse Down: when user presses mouse");
  captureMouseEvent(event);
  currentFunction.onMouseDown(
    [xCoordinate, yCoordinate],
    event
  );
});

/**********************************************
 * On mouse move...
 * ==================================
 * Capture x and y coordinates
 * If dragging isn't true (which means they are just hovering), apply onMouseMove function to the current function
 * Otherwise, apply the onMouseDrag method to the current function
 ***********************************************/
$("#canvas").mousemove(function (event) {
  //   console.log("Mouse Move: when user is moving mouse");
  captureMouseEvent(event);

  if (dragging != true) {
    currentFunction.onMouseMove(
      [xCoordinate, yCoordinate],
      event
    );
  } else {
    console.log("Dragging");
    currentFunction.onMouseDrag(
      [xCoordinate, yCoordinate],
      event
    );
  }
});

/**********************************************
 * On mouse up...
 * ==================================
 * Turn dragging to false
 * Console.log statement
 * Capture current x and y coordinates
 * Apply onMouseUp method to current function
 ***********************************************/
$("#canvas").mouseup(function (event) {
  dragging = false;
  console.log("Mouse Up: when user releases mouse");
  captureMouseEvent(event);
  currentFunction.onMouseUp(
    [xCoordinate, yCoordinate],
    event
  );
});

/**********************************************
 * On mouse leave...
 * ==================================
 * Turn dragging to false
 * Console.log whats going on
 * Capture x and y coordiante
 * Apply onMouseLeave method to current function
 ***********************************************/
$("#canvas").mouseleave(function (event) {
  dragging = false;
  console.log(
    "Mouse Leave: when user's cursor leaves the element"
  );
  captureMouseEvent(event);
  currentFunction.onMouseLeave(
    [xCoordinate, yCoordinate],
    event
  );
});

/**********************************************
 * Mouse Methods
 * ==================================
 * This class will be extended by other drawing classes
 ***********************************************/
class MouseMethods {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseDrag() {}
  onMouseUp() {}
}
