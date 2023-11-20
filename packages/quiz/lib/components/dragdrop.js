export const dragNdrop = (inputDiv, previewDiv) => {
        const dropZone = document.querySelector("#thema_file_input");
        const imageZone = document.querySelector("#thema_preview");
        dropZone.addEventListener("dragenter", (e) => {
                console.log("dragenter");
                dropZone.style.backgroundColor = "yellow";
        });
        dropZone.addEventListener("dragover", (e) => {
                e.preventDefault();
                console.log("dragover");
                dropZone.style.backgroundColor = "green";
        });
        dropZone.addEventListener("dragleave", (e) => {
                console.log("dragleave");
                dropZone.style.backgroundColor = "blue";
        });
        dropZone.addEventListener("drop", (e) => {
                e.preventDefault();
                console.log("drop");
                dropZone.style.backgroundColor = "red";
                const data = e.dataTransfer.files[0];
                console.dir(data);

                const fileReader = new FileReader();
                if (data.type.match("image")) {
                        fileReader.onload = () => {
                                const img = document.createElement("img");
                                img.src = fileReader.result;
                                imageZone.appendChild(img);
                        };
                        fileReader.readAsDataURL(data);
                }
        });

        return dropZone;
};
