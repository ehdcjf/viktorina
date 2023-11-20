export class Router {
        static instance;
        constructor() {
                if (Router.instance) return Router.instance;
                this.main = document.querySelector("main");
                this.viewMap = new Map();
                Router.instance = this;
                return this;
        }

        addRouter(component) {
                const key = component.root.id;
                const value = component.root;
                this.viewMap.set(key, value);
                return this;
        }

        hideAll() {
                this.main.childNodes.forEach((child) => {
                        if (child.nodeType == 1) child.style.display = "none";
                });
        }

        show(name) {
                const component = this.viewMap.get(name);
                this.hideAll();
                component.style.display = "flex";
        }

        init() {
                this.viewMap.get("generator").style.display = "flex";
        }
}
