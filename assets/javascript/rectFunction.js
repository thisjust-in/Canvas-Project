class RectFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    this.context.fillStyle = document.querySelector("#color").value;
    this.contextDraft.fillStyle = document.querySelector("#color").value;
    this.context.strokeStyle = colorPickerValue;
    this.contextDraft.strokeStyle = colorPickerValue;
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
    this.contextDraft.fillRect(
      this.startingX,
      this.startingY,
      xCoordinate - this.startingX,
      yCoordinate - this.startingY
    );
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {
    this.contextDraft.clearRect(
      0,
      0,
      canvasDraft.width,
      canvasDraft.height
    );
    // comment this bottom line out and show them what the draft does
    this.context.fillRect(
      this.startingX,
      this.startingY,
      xCoordinate - this.startingX,
      yCoordinate - this.startingY
    );
  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}
}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#rectButton").click(function () {
  console.log("Rectangle Button clicked");
  currentFunction = new RectFunction(context, contextDraft);
});