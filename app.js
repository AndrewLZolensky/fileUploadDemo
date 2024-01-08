const droparea = document.querySelector(".droparea");
droparea.addEventListener("dragover", (event) => {
    event.preventDefault();
    droparea.classList.add("hover");
});
droparea.addEventListener("dragleave", (event) => {
    event.preventDefault();
    droparea.classList.remove("hover");
})
droparea.addEventListener("drop", (event) => {
    event.preventDefault();
    const image = event.dataTransfer.files[0];
    const type = image.type;
    if (
        type == "image/png" || type == "image/jpg" || type == "image/jpeg"
    ) {
        droparea.classList.remove("invalid");
        droparea.classList.add("valid");
        droparea.textContent = "Added " + image.name;
    } else {
        droparea.classList.remove("valid");
        droparea.classList.add("invalid");
        droparea.textContent = "Invalid file format";
    }
})