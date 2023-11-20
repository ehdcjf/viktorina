import { Router } from "../router.js";

export class Runner {
        static instance;
        constructor() {
                if (Runner.instance) return Runner.instance;
                this.router = new Router();
                this.root = document.querySelector("#runner");
                Runner.instance = this;
        }
}
