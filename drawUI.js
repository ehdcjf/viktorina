/**
 *
 * @param {*} tagName HTML ELEMENT
 * @param {*} className
 * @returns
 */

customElements.define("word-count", WordCount, { extends: "p" });

function createHtmlElement(tagName, className) {
        const element = document.createElement(tagName);

        element.pushChild = (child) => {
                element.appendChild(child);
        };

        return element;
}

/**
 *
 * @param {string} className div className;
 * @returns HTMLDivElement
 */
function createClassDiv(className) {
        const div = document.createElement("div");
        div.de;
        div.classList.add(className);
        return div;
}

/**
 *
 * @param {string} className li className
 * @returns  HTMLLIElement
 */
function creatClassLi(className) {
        const li = document.createElement("li");
        li.classList.add(className);
        return li;
}

/**
 *
 * @param {string} className ul className
 * @returns HTMLUListElement
 */
function createClassUL(className) {
        const ul = document.createElement("ul");
        ul.classList.add(className);
        return ul;
}
