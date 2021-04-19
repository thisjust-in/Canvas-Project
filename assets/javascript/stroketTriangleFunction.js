class strokeTriangleFunction extends MouseMethods {
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
    
    let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX,2) + Math.pow(yCoordinate - this.startingY,2));  

    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startingX,this.startingY - radius);
    this.contextDraft.lineTo(this.startingX + Math.sqrt(3) * radius , this.startingY + radius * 1.5);
    this.contextDraft.lineTo(this.startingX - Math.sqrt(3) * radius , this.startingY + radius * 1.5);
    this.contextDraft.closePath();
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
  
    let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX,2) + Math.pow(yCoordinate - this.startingY,2))
  

    this.context.beginPath();
    this.context.moveTo(this.startingX,this.startingY - radius);
    this.context.lineTo(this.startingX + Math.sqrt(3) * radius , this.startingY + radius * 1.5);
    this.context.lineTo(this.startingX - Math.sqrt(3) * radius , this.startingY + radius * 1.5);
    this.context.closePath();
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
$("#stroketriangleButton").click(function () {
  console.log("stroketriangle Button clicked");
  currentFunction = new strokeTriangleFunction(context, contextDraft);
});