class curveFunction extends MouseMethods {
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
  this.context.spacing = spacing;
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
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX,this.startingY);
    this.contextDraft.quadraticCurveTo(xCoordinate, yCoordinate, this.startingX + (100 * spacing/100),this.startingY);
    console.log(this.startingX + spacing)
    this.contextDraft.strokeStyle = colorPickerValue;
    this.contextDraft.lineWidth = width ;
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
  
    this.context.beginPath();
    this.context.moveTo(this.startingX,this.startingY);
    this.context.quadraticCurveTo(xCoordinate, yCoordinate,  this.startingX + (100 * spacing/100),this.startingY);
    this.context.strokeStyle = colorPickerValue;
    this.context.lineWidth = width ;
    this.context.stroke();

  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}


}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#curveButton").click(function () {
  console.log("curve Button clicked");
  currentFunction = new curveFunction(context, contextDraft);
});