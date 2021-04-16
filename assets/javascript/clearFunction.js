class clearFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
    }
}

$("#clearButton").click(function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log("clear button clicked");


    question;
    currentFunction = new clearFunction(context, contextDraft);


    question
});