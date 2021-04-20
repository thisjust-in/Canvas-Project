class poloygonFunction extends MouseMethods {
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
  this.num = num;
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
    for(var i = 1;i <= num;i++){
      var newX = this.startingX - radius * Math.sin(2 * Math.PI * i/num);
      var newY = this.startingY - radius * Math.cos(2 * Math.PI * i/num);
      this.contextDraft.lineTo(newX,newY);
    }
    this.contextDraft.lineTo(this.startingX + radius * Math.sin(2 * Math.PI * 1/num),this.startingY + radius * Math.cos(2 * Math.PI * 1/num))
    // this.contextDraft.closePath();
    this.contextDraft.fillStyle = colorPickerValue;
    this.contextDraft.lineWidth = width ;
    this.contextDraft.fill();
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
    
    let radius = Math.sqrt(Math.pow(xCoordinate - this.startingX,2) + Math.pow(yCoordinate - this.startingY,2))
  

    this.context.beginPath();
    this.context.moveTo(this.startingX,this.startingY - radius);
    for(var i = 1;i <= num;i++){
      var newX = this.startingX - radius * Math.sin(2 * Math.PI/num * i);
      var newY = this.startingY - radius * Math.cos(2 * Math.PI/num * i);
      this.context.lineTo(newX,newY);
    }
    this.context.lineTo(this.startingX + radius * Math.sin(2 * Math.PI * 1/num),this.startingY + radius * Math.cos(2 * Math.PI * 1/num))
    // this.context.closePath();
    this.context.fillStyle = colorPickerValue;
    this.context.lineWidth = width ;
    this.context.fill();

  }
  onMouseLeave([xCoordinate, yCoordinate], event) {}


}

/**********************************************
 * Apply class to button
 * ==================================
 ***********************************************/
$("#poloygonButton").click(function () {
  console.log("poloygon Button clicked");
  currentFunction = new poloygonFunction(context, contextDraft);
});