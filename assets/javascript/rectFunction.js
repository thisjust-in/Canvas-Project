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
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX,this.startingY);
    this.contextDraft.lineTo(xCoordinate,this.startingY)
    this.contextDraft.lineTo(xCoordinate,yCoordinate)
    this.contextDraft.lineTo(this.startingX,yCoordinate)
    this.contextDraft.closePath();
    this.contextDraft.stroke();

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
    this.context.beginPath();
    this.context.moveTo(this.startingX,this.startingY);
    this.context.lineTo(xCoordinate,this.startingY)
    this.context.lineTo(xCoordinate,yCoordinate)
    this.context.lineTo(this.startingX,yCoordinate)
    this.context.closePath();
    this.context.stroke();  
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