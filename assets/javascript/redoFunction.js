class redoFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }
}

$("#redoButton").click(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log("redo button clicked");
    currentFunction = new redoFunction(context, contextDraft);
});