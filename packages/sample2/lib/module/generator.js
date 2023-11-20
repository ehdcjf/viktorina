import { Popup } from "./popup.js";

export class Generator {
        static instance;
        constructor() {
                if (Generator.instance) return Generator.instance;
                this.popup = new Popup();
                this.root = document.querySelector("#generator");
                this.btn = document.querySelector("#generate_btn");
                this.btn.addEventListener("click", () => this.popup.openPopup("quiz"));
                Generator.instance = this;
        }
}
