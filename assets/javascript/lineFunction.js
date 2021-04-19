class LineFunction extends MouseMethods {
  constructor(context, contextDraft) {
    super();
    this.context = context;
    this.contextDraft = contextDraft;
  }
  // When the user moves the mouse, what happens to the context?
  onMouseDown([xCoordinate, yCoordinate], event) {
    // first, apply the styling
    // stroke width
    this.context.strokeStyle = colorPickerValue;
    // fill style
    this.context.fillStyle = colorPickerValue;
    // line width
    this.context.lineWidth = width;
    // line cap
    this.context.lineCap = "round"
    // when the user presses down, begin the path
    this.context.beginPath();
    // move to the coordinate
    this.context.moveTo(xCoordinate, yCoordinate);
    // apply the draw function, which creates a line
    this.draw(xCoordinate, yCoordinate);
  }
  // When the user presses and moves the mouse, what happens to the context?
  onMouseDrag([xCoordinate, yCoordinate], event) {
    // wheen they drag the mouse, keep on drawing
    this.draw(xCoordinate, yCoordinate);
  }

  // When the user moves the mouse, what happens to the context?
  onMouseMove([xCoordinate, yCoordinate], event) {}
  onMouseUp([xCoordinate, yCoordinate], event) {}
  onMouseLeave([xCoordinate, yCoordinate], event) {}
  draw(x, y) {
    this.context.lineTo(x, y);
    this.context.moveTo(x, y);
    this.context.closePath();
    this.context.stroke();
  }

}
/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#lineButton").click(function () {
  console.log("Line button clicked");
  currentFunction = new LineFunction(context, contextDraft);
});