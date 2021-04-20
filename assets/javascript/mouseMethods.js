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
// color picker value
let colorPickerValue = document.querySelector("#color").value;

document.querySelector("#color").addEventListener("input", e => {
  colorPickerValue = document.querySelector("#color").value;
})
// keep track of current color stroke
let colorStroke = colorPickerValue;
// keep track of curerent color fill
let colorFill = colorPickerValue;
// keep track of num value of poloygon
let num = document.querySelector("#sides").value;
document.querySelector("#sides").addEventListener("input", e => {
  num = document.querySelector("#sides").value;
})
// keep track of distance value of curve
let spacing = document.querySelector("#curveDistance").value;
document.querySelector("#curveDistance").addEventListener("input", e => {
  spacing = document.querySelector("#curveDistance").value;
})

// keep track of width of line
let width = document.querySelector("#range").value;
document.querySelector("#range").addEventListener("input", e => {
  width = document.querySelector("#range").value;
})
// store a snapshot from the canvas (using the canvas’s toDataURL method) to an array "cPushArray", so each time the user draw or add something to the canvas the function cPush is called.
let cPushArray = new Array();
cStep = -1;

/**********************************************
 * Capture Mouse Event
 * ==================================
 * Given event, assign the mouse to the current x and y coordinate
 ***********************************************/
function captureMouseEvent(event) {
  [this.xCoordinate, this.yCoordinate] = [event.offsetX, event.offsetY]
}
/**********************************************
 * On mouse down...
 * ==================================
 * Turn dragging to true
 * Console.log
 * Capture x and y coordinates
 * Apply the on mouse down method to the current function
 ***********************************************/

// first mouse event - Mouse Down
$("#canvas").mousedown(event => {
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
$("#canvas").mousemove(event => {
  //   console.log("Mouse Move: when user is moving mouse");
  captureMouseEvent(event);

  if (dragging != true) {
    currentFunction.onMouseMove(
      [xCoordinate, yCoordinate],
      event
    );
  } else {
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
$("#canvas").mouseup(event => {
  dragging = false;
  console.log("Mouse Up: when user releases mouse");
  captureMouseEvent(event);
  currentFunction.onMouseUp(
    [xCoordinate, yCoordinate],
    event
  );
  cPush();
});

// on mouse enter
$("#canvas").mouseenter(event => {
  dragging = false;
  canvas.style.cursor = "default";
  console.log(
    "Mouse Enter: Mouse Enter"
  );
  captureMouseEvent(event);
  currentFunction.onMouseEnter(
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
$("#canvas").mouseleave(event => {
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



// on key down 
document.addEventListener("keydown", event => {
  currentFunction.onkeyDown(event)
})

// download image function
function download() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png"
  link.click();
}
// selecting button to download
document.querySelector("#download-Button").addEventListener("click", download);

function cPush() {
  cStep++;
  if (cStep < cPushArray.length) {
    cPushArray.length = cStep;
  }
  cPushArray.push(document.getElementById('canvas').toDataURL());
}



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