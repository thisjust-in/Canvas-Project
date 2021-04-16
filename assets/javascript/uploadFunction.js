class uploadFunction extends MouseMethods {
    constructor(context, contextDraft) {
        super();
        this.context = context;
        this.contextDraft = contextDraft;
        const reader = new FileReader();
        const img = new Image();

        const uploadImage = (e) => {
            reader.onload = () => {
                img.onload = () => {
                    context.drawImage(img, 0, 0);
                };
                img.src = reader.result;
            }
            reader.readAsDataURL(e.target.files[0]);
        };

        const imageLoader = document.getElementById("uploader");
        imageLoader.addEventListener("change", uploadImage);
    }

}

$("#uploader").click(function () {
    console.log("upload button clicked");
    currentFunction = new uploadFunction(context, contextDraft);
});