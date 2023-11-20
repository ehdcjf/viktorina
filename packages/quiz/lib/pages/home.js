import { Router } from "../router.js";

export class Home {
        static instance;
        constructor() {
                if (Home.instance) return Home.instance;
                this.router = new Router();
                this.root = document.querySelector("#home");
                this.create_quiz_btn = document.querySelector("#create_quiz_btn");
                this.create_quiz_btn.addEventListener("click", () => this.router.show("builder"));
                Home.instance = this;
        }
}
