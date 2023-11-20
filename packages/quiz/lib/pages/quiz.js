import { Router } from "../router.js";

export class Quiz {
        static instance;
        constructor() {
                if (Quiz.instance) return Quiz.instance;
                this.router = new Router();
                this.root = document.querySelector("#quiz");
                this.resolve_btn = document.querySelector("#resolve_quiz_btn");
                this.reject_btn = document.querySelector("#reject_quiz_btn");
                this.resolve_btn.addEventListener("click", () => this.router.show("builder"));
                this.reject_btn.addEventListener("click", () => this.router.show("builder"));
                Quiz.instance = this;
        }
}
