class straightLineFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }
    // When the user moves the mouse, what happens to the context?
    onMouseDown([xCoordinate, yCoordinate], event) {
        // styling
        this.context.strokeStyle = document.querySelector("#color").value;
        // Inital X and Y value on mouse down
        this.startingX = xCoordinate;
        this.startingY = yCoordinate;

        this.context.beginPath();
        context.moveTo(this.startingX, this.startingY);
    }

    // When the user presses and moves the mouse, what happens to the context?
    onMouseDrag([xCoordinate, yCoordinate], event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startingX, this.startingY);
        this.contextDraft.lineTo(xCoordinate, yCoordinate);
        this.contextDraft.stroke();
    }

    // When the user moves the mouse, what happens to the context?
    onMouseMove([xCoordinate, yCoordinate], event) {}
    onMouseUp([xCoordinate, yCoordinate], event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.context.lineTo(xCoordinate, yCoordinate);
        this.context.stroke();
    }
    onMouseLeave([xCoordinate, yCoordinate], event) {}
}


$("#straight-line-Button").click(function () {
    console.log("straight-line-Button clicked")
    currentFunction = new straightLineFunction(context, contextDraft);
});