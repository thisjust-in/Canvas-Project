class eraseFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }

    onMouseDown([xCoordinate, yCoordinate], event) {}

    // When the user presses and moves the mouse, Erase
    onMouseDrag([xCoordinate, yCoordinate], event) {
        // when they drag the mouse, erase
        // this.context.clearRect(xCoordinate, yCoordinate, 50, 50);
        this.erase(xCoordinate, yCoordinate);
    }

    onMouseUp([xCoordinate, yCoordinate], event) {}
    onMouseMove([xCoordinate, yCoordinate], event) {}
    onMouseLeave([xCoordinate, yCoordinate], event) {}
    // erase function
    erase(x, y) {
        this.context.clearRect(xCoordinate, yCoordinate, 50, 50);
    }

}

$("#erase-Button").click(() => {
    console.log("Erase Me!");
    currentFunction = new eraseFunction(context, contextDraft);
});