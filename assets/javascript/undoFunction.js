class undoFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }
}

$("#undo-Button").click(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log(cPushArray);
    console.log(cStep);
    function cUndo() {
        if (cStep >= 0) {
            cStep--;
            let canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            console.log(cStep);
            console.log(cPushArray[cStep]);
            console.log(canvasPic);
            canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0)}
        }
    }
    cUndo();
    console.log("undo button clicked");
    currentFunction = new undoFunction(context, contextDraft);
});