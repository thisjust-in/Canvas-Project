class clearFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }


}

$("#clearButton")
.click(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log("clear button clicked");
    currentFunction = new clearFunction(context, contextDraft);
    //there need to save once.If without it ,it will lost the last picture before clearing.
    //but when delete once,undo and redo,and delete again,undo to the fiest step,and return to the first delete,and redo,the first step and other steps befor first delete will still exit!
    cPush();
})
