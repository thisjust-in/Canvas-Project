class sprayFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
        this.context.isDrawing;
    }
    // on mouse down
    onMouseDown([xCoordinate, yCoordinate], event) {
        this.context.isDrawing = true;
        this.context.lineWidth = 10;
        this.context.fillStyle = colorPickerValue;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.context.moveTo(xCoordinate, yCoordinate);
    }
    // when dragging 
    onMouseDrag([xCoordinate, yCoordinate], event) {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let density = 50;
        if (this.context.isDrawing) {
            for (let i = density; i--;) {
                let radius = 20;
                let offsetX = getRandomInt(-radius, radius);
                let offsetY = getRandomInt(-radius, radius);
                this.context.fillRect(xCoordinate + offsetX, yCoordinate + offsetY, 1, 1);
            }
        }
    }
    onMouseUp([xCoordinate, yCoordinate], event) {
        this.context.isDrawing = false;
    }
    onMouseLeave([xCoordinate, yCoordinate], event) {}
}


$("#sprayButton").click(function () {
    console.log("spray paint button clicked");
    currentFunction = new sprayFunction(context, contextDraft);
});