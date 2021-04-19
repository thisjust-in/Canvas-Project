class strokecircleFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;

  }

  // When the user moves the mouse, waht happens to the context
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.context.fillStyle = colorPickerValue;
    this.contextDraft.fillStyle = colorPickerValue;
    this.context.strokeStyle = colorPickerValue;
    this.contextDraft.strokeStyle = colorPickerValue;
    this.context.lineWidth = width;
    this.contextDraft.lineWidth = width;
    this.startingX = xCoordinate;
    this.startingY = yCoordinate;

  }

  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    //mouse xcoordinate when drag
    // xCoordinate,
    //mouse ycoordinate when drag
    // yCoordinate,

    let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX, 2) + Math.pow(yCoordinate - this.startingY, 2))


    this.contextDraft.beginPath();
    this.contextDraft.arc(
      this.startingX,
      this.startingY,
      radius,
      0,
      2 * Math.PI
    );
    // this.contextDraft.fillStyle = colorPickerValue;
    // this.contextDraft.fill();

    this.contextDraft.strokeStyle = colorPickerValue;
    this.contextDraft.lineWidth = width;
    this.contextDraft.stroke();
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}

  onMouseUp([xCoordinate, yCoordinate], event) {

    // comment this bottom line out and show them what the draft does
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );

    // let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX,2) + Math.pow(yCoordinate - this.startingY))

    let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX, 2) + Math.pow(yCoordinate - this.startingY, 2))

    this.context.beginPath();
    this.context.arc(
      this.startingX,
      this.startingY,
      radius,
      0,
      2 * Math.PI
    );
    // this.context.fillStyle = colorPickerValue;
    // this.context.fill();

    this.context.strokeStyle = colorPickerValue;
    this.context.lineWidth = width;
    this.context.stroke();

  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}

}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#strokecircleButton").click(function () {
  console.log("storkeCircle Button clicked");
  currentFunction = new strokecircleFunction(context, contextDraft);
});