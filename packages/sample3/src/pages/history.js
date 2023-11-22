import { Router } from "../router.js";

export class History {
        static instance;
        constructor() {
                if (History.instance) return History.instance;
                this.router = new Router();
                this.root = document.querySelector("#history");
                History.instance = this;
        }
}
