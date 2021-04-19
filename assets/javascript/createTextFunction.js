// xCoordinate = event.offsetX || where the mouse is at X
// YCoordinate  = event.offsetY || where the mouse is at X

class createTextFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
        this.textArr = [];
    }

    onMouseDown([xCoordinate, yCoordinate], event) {
        this.startingX = xCoordinate;
        this.startingY = yCoordinate;

        //styling
        if (this.textArr.length === 0) {
            this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);
        }
        this.context.font = "20pt Arial";
        this.context.fillStyle = colorPickerValue;
        this.contextDraft.font = "20pt Arial";
        this.contextDraft.fillStyle = document.querySelector("#color").value;
        // this.contextDraft.strokeRect(this.startingX, this.startingY, 200, 50);
        this.context.textBaseline = "top";
        this.contextDraft.textBaseline = "top";
    }

    onMouseUp([xCoordinate, yCoordinate], event) {}

    onkeyDown(event) {
        // push the character to textArr array
        this.textArr.push(event.key)

        if ([9, 13, 16, 17, 18, 20, 27, 37, 38, 39, 40, 91].indexOf(event.keyCode) !== -1) {
            console.log("key input")
            this.textArr.pop();
        } else if (event.keyCode === 8) {
            // remove last element from textArr
            this.textArr.pop();
            this.textArr.pop();
            // clears out context draft 
            this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);
            // this.contextDraft.strokeRect(this.startingX - 10, this.startingY, 200, 50);
            // then print out array again
            this.contextDraft.fillText(this.textArr.join(""), this.startingX, this.startingY);
        } else {

            // clear rect 
            this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);
            // this.contextDraft.strokeRect(this.startingX - 10, this.startingY, 300, 50);
            // write text
            this.contextDraft.fillText(this.textArr.join(""), this.startingX, this.startingY);
        }
    };

    onMouseMove([xCoordinate, yCoordinate], event) {}
    onMouseLeave([xCoordinate, yCoordinate], event) {
        this.contextDraft.clearRect(0, 0, canvas.width, canvas.height);
        this.context.fillText(this.textArr.join(""), this.startingX, this.startingY);
    }

    onMouseEnter([xCoordinate, yCoordinate], event) {
        canvas.style.cursor = "text";
    }


}

$("#text-Button").click(function () {
    console.log("text button clicked");
    currentFunction = new createTextFunction(context, contextDraft);
});