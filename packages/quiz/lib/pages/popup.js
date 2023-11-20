import { Router } from "../router.js";

export class Popup {
        static instance;
        constructor() {
                if (Popup.instance) return Popup.instance;
                this.router = new Router();
                this.root = document.querySelector("#popup");
                Popup.instance = this;
        }
}
