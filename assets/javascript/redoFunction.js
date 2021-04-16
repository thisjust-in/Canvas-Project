class redoFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }
}

$("#redo-Button").click(function () {
    function cRedo() {
        if (cStep < cPushArray.length-1) {
            cStep++;
            var canvasPic = new Image();
            canvasPic.src = cPushArray[cStep];
            canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
        }
    }
    cRedo();
    console.log("redo button clicked");
    currentFunction = new redoFunction(context, contextDraft);
});