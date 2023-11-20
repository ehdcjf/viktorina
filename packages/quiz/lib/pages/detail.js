import { Router } from "../router.js";

export class Detail {
        static instance;
        constructor() {
                if (Detail.instance) return Detail.instance;
                this.router = new Router();
                this.root = document.querySelector("#detail");
                Detail.instance = this;
        }
}
