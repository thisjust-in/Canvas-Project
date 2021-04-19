class brushLinesFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
        this.context.isDrawing;
        this.context.lastPoint;
    }
    // on mouse down
    onMouseDown([xCoordinate, yCoordinate], event) {
        this.context.lineWidth = 3;
        this.context.strokeStyle = colorPickerValue;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.context.isDrawing = true;
        this.context.lastPoint = {
            x: xCoordinate,
            y: yCoordinate
        };
    }
    // when dragging 
    onMouseDrag([xCoordinate, yCoordinate], event) {
        if (!this.context.isDrawing) return;

        this.context.beginPath();

        this.context.globalAlpha = 1;
        this.context.moveTo(this.context.lastPoint.x, this.context.lastPoint.y);
        this.context.lineTo(xCoordinate, yCoordinate);
        this.context.stroke();

        this.context.moveTo(this.context.lastPoint.x - 4, this.context.lastPoint.y - 4);
        this.context.lineTo(xCoordinate - 4, yCoordinate - 4);
        this.context.stroke();

        this.context.moveTo(this.context.lastPoint.x - 2, this.context.lastPoint.y - 2);
        this.context.lineTo(xCoordinate - 2, yCoordinate - 2);
        this.context.stroke();

        this.context.moveTo(this.context.lastPoint.x + 2, this.context.lastPoint.y + 2);
        this.context.lineTo(xCoordinate + 2, yCoordinate + 2);
        this.context.stroke();

        this.context.moveTo(this.context.lastPoint.x + 4, this.context.lastPoint.y + 4);
        this.context.lineTo(xCoordinate + 4, yCoordinate + 4);
        this.context.stroke();

        this.context.lastPoint = {
            x: xCoordinate,
            y: yCoordinate
        };
    }

    onMouseMove([xCoordinate, yCoordinate], event) {}

    onMouseUp([xCoordinate, yCoordinate], event) {
        this.context.isDrawing = false;
    }

    onMouseLeave([xCoordinate, yCoordinate], event) {}
}


$("#brushLineButton").click(function () {
    console.log("brush lines button clicked");
    currentFunction = new brushLinesFunction(context, contextDraft);
});